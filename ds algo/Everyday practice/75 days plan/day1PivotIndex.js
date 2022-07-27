var pivotIndex = function (nums) {
  // if(nums.length === 0) return -1;

  for (let i = 0; i < nums.length; i++) {
    let left = 0,
      right = 0;
    for (let j = 0; j < i; j++) {
      left += nums[j];
    }
    for (let k = i + 1; k < nums.length; k++) {
      right += nums[k];
    }
    if (left === right) return i;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
