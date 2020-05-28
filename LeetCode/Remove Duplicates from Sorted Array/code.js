/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let j = 0
  let i = 1
  
  while(i <= nums.length){
      if((nums[i] === nums[j]) && (nums[j] !== undefined)){
          nums.splice(i, 1)
      }else{
          j++
          i++
      }
  }
};