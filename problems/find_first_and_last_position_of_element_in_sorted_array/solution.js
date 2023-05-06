/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = -1,
        end = -1;

    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        let num = nums[m];
        if (num === target && (m === 0 || nums[m - 1] < num)) {
            start = m;
            break;
        }

        if (num < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        let num = nums[m];
        if (num === target && (m === nums.length - 1 || nums[m + 1] > num)) {
            end = m;
            break;
        }

        if (num <= target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return [start, end];
};