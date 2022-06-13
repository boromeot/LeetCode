/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0,
        rob2 = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let temp = rob2;
        rob2 = Math.max(rob1 + nums[i], rob2);
        rob1 = temp;
    }
    return rob2;
};