/**
 * @param {number} n
 * @return {number}
 */

var memo = (fn, context) => {
  let result = {};
  return (...args) => {
    let argsKey = JSON.stringify(args);
    if (!result[argsKey]) {
      result[argsKey] = fn.call(context || this, args);
    }
    return result[argsKey];
  };
};
var fibo = function (n) {
  if (n <= 1) {
    return 1;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};
var climbStairs = memo(fibo);
