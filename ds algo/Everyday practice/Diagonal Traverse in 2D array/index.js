let findDiagonalOrder = function (matrix) {
  if (matrix.length < 1) {
    return [];
  }

  let row = 0,
    col = 0;
  let up = true;
  let m = matrix.length - 1,
    n = matrix[0].length - 1;
  let result = [];

  while (row <= m && col <= n) {
    if (up) {
      while (row > 0 && col < n) {
        result.push(matrix[row][col]);
        row--;
        col++;
      }
      result.push(matrix[row][col]);
      if (col === n) {
        row++;
      } else {
        col++;
      }
    } else {
      while (col > 0 && row < m) {
        result.push(matrix[row][col]);
        col--;
        row++;
      }
      result.push(matrix[row][col]);
      if (row === m) {
        col++;
      } else {
        row++;
      }
    }
    up = !up;
  }
  console.log(result);
};
const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

findDiagonalOrder(mat);
// O/P [1, 2, 4, 7, 5, 3, 6, 8, 9]
