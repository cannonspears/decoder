const substitutionModule = (function () {
  function isValid(alphabet) {
    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] == alphabet[j]) return false;
      }
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if (!isValid(alphabet)) return false;
    let originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.toLowerCase();

    if (encode) {
      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] >= "a" && input[i] <= "z") {
          let originalIndex = originalAlphabet.indexOf(input[i]);
          result += alphabet[originalIndex];
        } else {
          result += input[i];
        }
      }
      return result;
    } else {
      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
          let newIndex = alphabet.indexOf(input[i]);
          result += originalAlphabet[newIndex];
        } else {
          result += input[i];
        }
      }
      return result;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
