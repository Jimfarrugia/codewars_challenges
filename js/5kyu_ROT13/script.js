// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message) {

//   return message.
//     split('').
//     map(character => {
//       let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
//       // RegExp: not a lower or uppercase letter
//       let notLetter = new RegExp(/[^a-zA-Z]/);
//       // if character matches, return it as is
//       if (notLetter.test(character)) return character;
//       // return the 13 characters following said character's position from the alphabet array
//       return alphabet.splice(alphabet.indexOf(character)+1, 13).join('');
//     })
//     .join('');
// }

// let mystring = "a b c123"
// console.log(rot13(mystring));

// CLARIFICATION
// "replaces a letter with the letter 13 letters after it"
// They mean replace with the 13th letter after it.

function rot13(message) {

  return message.
    split('').
    map(character => {
      let lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
      let upperCaseAlphabet = lowerCaseAlphabet.join('').toUpperCase().split('');
      // RegExp: not a lower or uppercase letter
      let notLetter = new RegExp(/[^a-zA-Z]/);
      // if character matches, return it as is
      if (notLetter.test(character)) return character;
      // if character is uppercase
      if (character === character.toUpperCase()) {
        // return the 13th letter following character in the upperCaseAlphabet array
        return upperCaseAlphabet.splice(upperCaseAlphabet.indexOf(character)+13, 1).join('');
      };
      // return the 13th letter following character in the lowerCaseAlphabet array
      return lowerCaseAlphabet.splice(lowerCaseAlphabet.indexOf(character)+13, 1).join('');
    })
    .join('');
}

console.log(rot13("Test"));

