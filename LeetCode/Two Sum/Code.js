/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  const totals = {}
  j = 1
  
  while(j !== nums.length){
      for(let i = 0; i < nums.length; i++){
          if(i !== j && j > i){
              if(nums[i] + nums[j] === target){
                  return [i, j]
              }
          }
      }
      j++
  }
};