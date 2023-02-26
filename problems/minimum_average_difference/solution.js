/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const prefix = [];
    let sum = 0;
    for (let n of nums) {
        sum += n;
        prefix.push(sum);
    }
    let min = Infinity;
    let res = -1;
    const LAST = prefix[prefix.length - 1];
    for (let i = 0; i < nums.length; i++) {
        const n = prefix[i];
        let num1 = Math.floor(n / (i + 1)),
            num2 = Math.floor((LAST - n) / (nums.length - i - 1)) || 0;
        let avgDiff = Math.abs(num1 - num2);

        if (avgDiff < min) {
            min = avgDiff;
            res = i;
        }
    }
    return res;
};