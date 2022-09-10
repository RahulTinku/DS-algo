/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length;
    let map = new Map();
    
    for(let i=0; i<len; i++){
       const num = target - nums[i];
       if(map.get(nums[i]) !== undefined){
           return [map.get(nums[i]), i]
       }else{
           map.set(num, i)
       }
    }
    return []
};