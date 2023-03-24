const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    if (encode === true) {
      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] >= "a" && input[i] <= "z") {
          let letterIndex = alphabet.indexOf(input[i]);
          let newIndex = letterIndex + shift;
          if (newIndex > 25) {
            newIndex -= alphabet.length;
          } else if (newIndex < 0) {
            newIndex += alphabet.length;
          }
          result += alphabet[newIndex];
        } else {
          result += input[i];
        }
      }
      return result;
    } else {
      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] >= "a" && input[i] <= "z") {
          let letterIndex = alphabet.indexOf(input[i]);
          let newIndex = letterIndex - shift;
          if (newIndex > 25) {
            newIndex -= alphabet.length;
          } else if (newIndex < 0) {
            newIndex += alphabet.length;
          }
          result += alphabet[newIndex];
        } else {
          result += input[i];
        }
      }
      return result;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
