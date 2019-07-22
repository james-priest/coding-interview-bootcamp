// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Do this EXACTLY as shown below.. very straight-forward and simple
//  Don't get fancy an over-complicate what should be readable and easy

// Solution #1 - for loop
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      // Is the number a multiple of 5?
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// Solution #2 - while loop
// function fizzBuzz(n) {
//   let i = 1;

//   while (i <= n) {
//     // Is the number a multiple of 3 and 5?
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuz');
//     } else if (i % 3 === 0) {
//       // Is the number a multiple of 3?
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       // Is the number a multiple of 5?
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }

//     i++;
//   }
// }

module.exports = fizzBuzz;
