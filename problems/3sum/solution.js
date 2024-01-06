/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) r--;
            else if (sum < 0) l++;
            else {
                res.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l + 1] && l < r) l++;
                while (nums[r] === nums[r - 1] && l < r) r--;
                l++;
                r--;
            }
        }
            while (nums[i] === nums[i + 1] && i < nums.length) {
            i++;
        }
    }
    return res;
};