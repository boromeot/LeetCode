/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const count = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            const k = nums[i][j];
            count[k] ? count[k]++ : count[k] = 1;
        }
    }
    const res = [];
    for (let k in count) {
        if (count[k] === nums.length) res.push(Number(k));
    }
    return res;
};