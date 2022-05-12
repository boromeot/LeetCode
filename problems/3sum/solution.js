/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    if (nums.length < 3) return res;
    
    const sorted = nums.sort((a, b) => a - b);
    const target = 0;
    for (let i = 0; i < sorted.length; i++) {
        
        if (sorted[i] > target) break;
        if (i > 0 && sorted[i] === nums[i - 1]) continue;
        
        let l = i + 1;
        let r = sorted.length - 1;
        while (l < r) {
            const sum = sorted[i] + sorted[l] + sorted[r];
            if (sum === target) {
                res.push([sorted[i], sorted[l], sorted[r]]);
                while (sorted[l] === sorted[l + 1]) l++;
                while (sorted[r] === sorted[r - 1]) r--;
                l++;
                r--;
            } else if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
    }
    return res;
};