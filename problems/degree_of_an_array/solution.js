/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let count = {};
    let startIndex = {};
    let endIndex = {};
    let degree = 0;
    let res = nums.length;
    
    
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (count[n]) { 
            count[n]++;
        }
        else {
            count[n] = 1;
            startIndex[n] = i;
        }
        endIndex[n] = i;
        degree = Math.max(degree, count[n]);
    }

    for (let k of Object.keys(count)) {
        if (count[k] === degree) {
            res = Math.min(res, endIndex[k] - startIndex[k] + 1);
        }
    }
    return res;
    
};