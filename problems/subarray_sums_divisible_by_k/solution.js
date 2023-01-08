/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let prefixSum = 0;
    let map = {'0': 1};
    let res = 0;

    for (let n of nums) {
        prefixSum += n;
        let remainder = prefixSum % k; // need to shave off remainder from current subarray
        
        if (remainder < 0) remainder += k;

        res += map[remainder] || 0;
        map[remainder] = map[remainder] + 1 || 1;
    }
    console.log(map)
    return res;
};