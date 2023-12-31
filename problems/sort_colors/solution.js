/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let buckets = new Array(3).fill(0);
    for (let i = 0; i < nums.length; i++) {
        buckets[nums[i]]++;
    }
    let index = 0;
    for (let i = 0; i < buckets.length; i++) {
        for (let j = 0; j < buckets[i]; j++) {
            nums[index] = i;
            index++;
        }
    }
};