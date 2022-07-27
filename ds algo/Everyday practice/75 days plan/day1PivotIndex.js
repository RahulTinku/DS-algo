var pivotIndex = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     let left = 0,
  //       right = 0;
  //     for (let j = 0; j < i; j++) {
  //       left += nums[j];
  //     }
  //     for (let k = i + 1; k < nums.length; k++) {
  //       right += nums[k];
  //     }
  //     if (left === right) return i;
  //   }
  //   return -1;

  let postSum = nums.reduce((acc, curr) => acc + curr);
  let preSum = 0,
    len = nums.length;

  for (let i = 0; i < len; i++) {
    postSum -= nums[i];
    if (postSum === preSum) {
      return i;
    } else {
      preSum += nums[i];
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
