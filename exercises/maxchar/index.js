// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Build a charMap to solve
// This technique is used in many other problems

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // for of is for arrays or strings
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  // for in is for objects
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
