/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    const arr = mat[i];
    for (let j = 0; j < arr.length; j++) {
      const index = i + j;
      if (map.has(index)) {
        map.set(index, map.get(index) + mat[i][j]);
      } else {
        map.set(index, mat[i][j]);
      }
    }
  }
  return Array.from(map);
};
