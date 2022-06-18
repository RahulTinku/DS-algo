var spiralOrder = function (matrix) {
  let top = 0,
    down = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  let dir = 0;
  let result = [];
  while (top <= down && left <= right) {
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top += 1;
    } else if (dir === 1) {
      for (let i = top; i <= down; i++) {
        result.push(matrix[i][right]);
      }
      right -= 1;
    } else if (dir === 2) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[down][i]);
      }
      down -= 1;
    } else if (dir === 3) {
      for (let i = down; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left += 1;
    }

    dir = (dir + 1) % 4;
  }
  return result;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix));
// O/P expected  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
