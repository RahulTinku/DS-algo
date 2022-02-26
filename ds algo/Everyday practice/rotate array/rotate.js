/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  const num = 0;
  while (k > nums.length) {
    if (nums.length / k < 1) {
      k = k - nums.length;
    }
  }

  const n = nums.splice(-k);
  nums.unshift(...n);
  return nums;
};

console.log(rotate([1, 2], 5));
