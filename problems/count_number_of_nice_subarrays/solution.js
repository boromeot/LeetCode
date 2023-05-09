/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let odds=0;
  let count=0;
  let prefix=0
  let i=0;
  for(let j=0;j<nums.length;j++){
    if(nums[j] % 2){ 
      odds += 1
      prefix = 0
    }
    while(odds == k && i <= j) {
      if(nums[i] % 2) odds-=1
        i++
        prefix++
    }
    count+=prefix
  }
  return count
};