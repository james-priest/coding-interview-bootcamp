// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1 - chained
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// Solution #2 - for of
// function reverse(str) {
//   let reversed = '';
//   for (const char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Solution #3 - reduce()
// function reverse(str) {
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }

module.exports = reverse;
