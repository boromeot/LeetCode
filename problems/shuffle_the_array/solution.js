/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const res = new Array();
    let l = 0;
    let r = n;
    
    while (r < nums.length) {
        res.push(nums[l]);
        res.push(nums[r]);
        l++; r++;
    }
    return res;
};