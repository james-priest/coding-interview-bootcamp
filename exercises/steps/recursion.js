// Recursion
// 1 - Figure out the bare minimum pieces of info to
//     to represent the problem
// 2 - Give reasonable defaults to the bare minimum
//     pieces of info
// 3 - Check the base case. Is there any work left to
//     do? if not, return
// 4 - Do some work. Call your function again, making
//     sure the arguments have changed in some fashion

function printNum(n) {
  // base case (always do first)
  if (n === 0) {
    return;
  }

  console.log(n);
  printNum(n - 1); // always change args before calling func
}

printNum(10);

// Give reasonable defaults to prevent infinite loop
//  in case func called without 2nd arg
function printNum2(n, decrement = 1) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printNum(n - decrement);
}

printNum2(4, 2);
