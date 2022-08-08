/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {    // O(n) Time, O(1) Memory
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        
    }
    return i + 1;
};