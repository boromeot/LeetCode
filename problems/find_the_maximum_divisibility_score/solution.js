/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let res = Infinity;
    let resScore = 0;
    let score = 0;
    let cache = {};
    for (let i = 0; i < divisors.length; i++) {
        if (cache[divisors[i]]) continue;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % divisors[i] === 0) score++;
        }
        if (score > resScore) {
            res = divisors[i];
            resScore = score;
        }
        else if (score === resScore) res = Math.min(res, divisors[i]);
        cache[divisors[i]] = score;
        score = 0;
    }
    return res;
};