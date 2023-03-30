/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    nums.sort((a, b) => b - a);

    let prefix = 0;
    let res = 0;
    
    for (let n of nums) {
        prefix += n;
        if (prefix > 0) res++;
    }
    return res;
};