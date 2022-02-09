/**
 * @param {number} n
 * @return {boolean}
 */
// new set to store results
let isChecked = new Set();
var isHappy = function (n) {
  let sum = 0;
  if (n > 9) {
    n = n + '';
    const num = n.split('');

    for (let i of num) {
      sum += Math.pow(+i, 2);
    }
  } else {
    sum = n * n;
  }
  if (!isChecked.has(sum)) {
    isChecked.add(sum);
  } else {
    isChecked = new Set();
    return false;
  }
  if (sum == 1) {
    isChecked = new Set();
    return true;
  } else {
    return isHappy(sum);
  }
};
