/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = {'0': -1};
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        sum += n;
        const mod = sum % k;
        
        if (map[mod] !== undefined) {
            let len = i - map[mod];
            if (len >= 2) return true;
        } else {
            map[mod] = i;
        }
    }
    return false;
};