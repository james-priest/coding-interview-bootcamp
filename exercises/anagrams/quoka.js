// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1 - buildCharMap helper
function anagrams1(stringA, stringB) {}

// Solution #2 - use array.sort() & cleanString helper
function anagrams2(stringA, stringB) {}

console.log(anagrams1('hello', 'hellos')); //false
console.log(anagrams1('rail safety', 'fairy tales')); //true
console.log(anagrams1('RAIL! SAFETY!', 'fairy tales')); //true
console.log(anagrams1('Hi there', 'Bye there')); // false

console.log(anagrams2('hello', 'hellos')); //false
console.log(anagrams2('rail safety', 'fairy tales')); //true
console.log(anagrams2('RAIL! SAFETY!', 'fairy tales')); //true
console.log(anagrams2('Hi there', 'Bye there')); // false
