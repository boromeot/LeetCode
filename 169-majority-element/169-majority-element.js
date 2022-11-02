/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {};
    let max = 0;
    let res;
    
    for (let n of nums) {
        if (count[n]) count[n]++;
        else count[n] = 1;
    }
    console.log(count)
    for (let k of Object.keys(count)) {
        if (count[k] > max) {
            res = k;
            max = count[k];
        }
    }
    return +res;
};