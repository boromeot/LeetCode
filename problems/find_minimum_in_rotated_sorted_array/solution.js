/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0,
        r = nums.length - 1;

    let min = Infinity;

    while (l <= r) {
        if (nums[l] < nums[r]) {
            min = Math.min(min, nums[l]);
            break;
        }
        const m = l + Math.floor((r - l) / 2);
        min = Math.min(min, nums[m]);
        if (nums[m] >= nums[l]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return min;
};