/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefix = 0;
    let res = 0;
    const prefixCount = {'0' : 1};

    for (let n of nums) {
        prefix += n;
        const diff = prefix - k;
        
        res += prefixCount[diff] || 0;
        prefixCount[prefix] = prefixCount[prefix] + 1 || 1;
    }
    return res;
};