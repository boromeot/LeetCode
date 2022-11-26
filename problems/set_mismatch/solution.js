/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) { // O(n), O(n)
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    
    let set = new Set();
    let runningSum = 0;
    let res = [];
    
    for (let n of nums) {
        if (set.has(n)) {
            res.push(n);
        } else {
            set.add(n);
            runningSum += n;
        }
    }
    res.push(sum - runningSum);
    return res;
};