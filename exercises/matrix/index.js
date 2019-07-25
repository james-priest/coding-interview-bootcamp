// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// look at diagram to solve
function matrix(n) {
  // build nested arrays first
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  // calc end row & end column
  // 1 - Top row
  //    start column to end column
  //    inc row by 1
  // 2 - Right column
  //    start row to end row
  //    dec col by 1
  // 3 - Bottom row
  //    end col to start col
  //    dec row by 1
  // 4 - Left column
  //    end row to start row
  //    inc col by 1
  let startRow = 0,
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1,
    counter = 1;

  while (startCol <= endCol && startRow <= endRow) {
    // Top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter++;
    }
    endCol--;

    // Bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter++;
    }
    endRow--;

    // Left column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter++;
    }
    startCol++;
  }
  return results;
}

module.exports = matrix;
