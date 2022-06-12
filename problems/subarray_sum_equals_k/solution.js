/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0;
    let sum = 0;
    let map = {
        '0' : 1
    }
    
    for (let n of nums) {
        sum += n;
        let diff = sum - k;
        
        res += map[diff] || 0;
        map[sum] = map[sum] + 1 || 1;
        
    }
    return res;
};