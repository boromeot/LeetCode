/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
   let res = 0;
   for (let i = 1, j = 0; i < nums.length; i++) {
        // nums[i] should === nums[j] if the distance between them is even
        // nums[i] should === nums[j] - 1 if the distance between them is odd
       if (nums[i] !== nums[j] + (i - j) % 2) { // if not then reset j to be i or i - 1
           j = i - (nums[i - 1]  === nums[i] - 1);
       }
       res = Math.max(res, i - j + 1);
   }
   return res === 1 ? -1 : res;
};