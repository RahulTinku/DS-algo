/**
 * @param {number[]} prices
 * @return {number}
 */

// brute force
// var maxProfit = function (prices) {
//   let max = 0,
//     len = prices.length;

//   for (let i = 0; i < len; i++) {
//     let currentProfit = 0;
//     for (let j = i + 1; j < len; j++) {
//       currentProfit = prices[j] - prices[i];
//       if (currentProfit > max) max = currentProfit;
//     }
//   }
//   return max;
// };

// double pointer
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0],
    max = prices[0],
    diff = 0,
    len = prices.length;

  for (let i = 1; i < len; i++) {
    if (min > prices[i]) {
      min = prices[i];
      max = prices[i];
    } else if (max < prices[i]) {
      max = prices[i];
    }
    if (diff < max - min) diff = max - min;
  }
  return diff < 0 ? 0 : diff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
