/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let max1 = rob(nums.slice(0, nums.length -1));
    let max2 = rob(nums.slice(1));
    return Math.max(nums[0], max1, max2);
    
    function rob(nums) {
        let rob1 = 0,
            rob2 = 0;
    
        for (let n of nums) {
            let temp = Math.max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
    
};