/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  let isNeg = false;
  if (x < 0) {
    isNeg = true;
    x = x * -1;
  }
  while (x > 0) {
    const temp = x % 10;
    res = res * 10 + temp;
    x = Math.floor(x / 10);
  }
  return isNeg ? -1 * res : res;
};

console.log(reverse(-321));
