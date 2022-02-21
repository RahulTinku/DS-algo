/**
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]

Constrains:-
m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300


 */

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function (mat, r, c) {
  var arr = mat.flat();

  if (r * c !== arr.length) return mat;
  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, c));
  }
  return res;
};
