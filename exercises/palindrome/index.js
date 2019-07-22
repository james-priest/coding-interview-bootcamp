// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #1 - chained
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');

//   return str === reversed;
// }

// Solution #2
// Is 'every' is used to do a boolean check on every element within an array.
// not ideal bcz it compares every char rather than stop halfway
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
