// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #1 - iterative - always use this first
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  // first look thru rows
  for (let row = 0; row < n; row++) {
    let string = '';

    // next loop thru columns
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        string += '#';
      } else {
        string += ' ';
      }
    }

    console.log(string);
  }
}

// Solution #2 - recursion - only do if asked to
// function pyramid(n, row = 0, string = '') {
//   if (n === row) {
//     return;
//   }

//   if (string.length === 2 * n - 1) {
//     console.log(string);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= string.length && midpoint + row >= string.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, string + add);
// }

module.exports = pyramid;
