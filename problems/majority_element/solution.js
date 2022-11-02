/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let res = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (res === n) count++;
        else count--;
        
        if (count === 0) {
            res = nums[i + 1];
            count = 0;
        }
        
    }
    return res;
};