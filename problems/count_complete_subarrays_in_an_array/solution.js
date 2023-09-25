/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let d = 0;
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
            d++;
        }
    }

    let res = 0;
    let map = new Map();
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (map.get(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
        else  map.set(nums[i], 1);
        while (map.size === d) {
            res += nums.length - i;
            map.set(nums[j], map.get(nums[j]) - 1);
            if (map.get(nums[j]) === 0) map.delete(nums[j]);
            j++;
        }
    }
    return res;
};