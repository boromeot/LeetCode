/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let r = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        r = Math.max(i + 1, r);
        while (nums[r] <= num) {
            r++;
        }
        if (nums[r] > num) {
            count++;
            r++;
        }
    }
    return count;
};