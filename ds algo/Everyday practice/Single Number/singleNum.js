/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  for (let n of nums) {
    if (nums.indexOf(n) === nums.lastIndexOf(n)) {
      return n;
    }
  }
};

/** *************************************************************************************** */
// Alternate Web
/** *************************************************************************************** */

var singleNumber = function (nums) {
  let mySet = new Set();
  for (let n of nums) {
    if (mySet.has(n)) {
      mySet.delete(n);
    } else {
      mySet.add(n);
    }
  }
  return [...mySet];
};

/** **************************************************************************************** */

console.log(singleNumber([2, 2, 1]));
