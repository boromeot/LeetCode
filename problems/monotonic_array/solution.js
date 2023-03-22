/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let inc = true,
        dec = true;

    let incN = nums[0],
        decN = nums[0];

    for (let n of nums) {
        if (incN > n) inc = false;
        if (decN < n) dec = false;
        incN = n; decN = n;
    }
    return inc || dec;
};