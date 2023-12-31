/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0, r = nums.length;
    while (l < r) {
        let m = Math.floor(l + (r - l) / 2);
        if (nums[m] === nums[m + 1]) m = m - 1;
        if ((m - l + 1) % 2 === 0) l = m + 1;
        else r = m;
    }
    return nums[l];
};