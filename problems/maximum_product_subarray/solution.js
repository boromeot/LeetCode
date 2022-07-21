/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0];
    let cMax = 1,
        cMin = 1;
    
    for (let n of nums) {
        let tmp = cMax;
        cMax = Math.max(cMax * n, cMin * n, n);
        cMin = Math.min(tmp * n, cMin * n, n);
    
        res = Math.max(res, cMax, cMin);
        
    }
    return res;   
};