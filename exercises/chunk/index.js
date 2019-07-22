// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//  Solution #1 - for loop
function chunk(array, size) {
  const chunked = [];

  for (const element of array) {
    // Get last element of chunked array
    const last = chunked[chunked.length - 1];

    // if it's undefined or equals size, then push a new sub-array
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      // push element onto sub-array of last chunked element
      last.push(element);
    }
  }

  return chunked;
}

//  Solution #2 - array.slice()
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
