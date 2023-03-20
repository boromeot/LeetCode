/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let count = {};
    let res = -1;
    let mostFreq = 0;

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n % 2 === 0) {
            count[n] ? count[n]++ : count[n] = 1;
            if (count[n] > mostFreq) {
                res = n;
                mostFreq = count[n];
            } else if (count[n] === mostFreq) {
                res = Math.min(res, n);
            }
        }
    }
    return res;
};