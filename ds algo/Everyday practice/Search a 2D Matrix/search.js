/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 1) {
    if (matrix[0].indexOf(target) !== -1) return true;
    else return false;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === matrix.length - 1) {
        if (matrix[i].indexOf(target) !== -1) {
          return true;
        } else return false;
      }
      if (matrix[i][j] <= target && target < matrix[i + 1][j]) {
        if (matrix[i].indexOf(target) !== -1) {
          return true;
        }
      }
    }
  }
  return false;
};
