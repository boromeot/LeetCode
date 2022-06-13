/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let rob1 = helper(nums.slice(0, nums.length - 1));
    let rob2 = helper(nums.slice(1));
    console.log(rob1, rob2);
    return Math.max(rob1, rob2);
    
    function helper(nums) {
        let rob1 = 0,
            rob2 = 0;
        
        for (let n of nums) {
            let temp = rob2;
            rob2 = Math.max(rob2, rob1 + n);
            rob1 = temp;
        }
        return rob2;
    }
};

// [2,3,2]