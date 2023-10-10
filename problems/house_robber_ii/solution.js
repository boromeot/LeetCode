/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    let arr1 = nums.slice(0, nums.length - 1);
    let arr2 = nums.slice(1);
    return Math.max(HR(arr1), HR(arr2));
};

function HR(nums) {
    let rob1 = 0,
        rob2 = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let temp = rob2;
        rob2 = Math.max(rob1 + nums[i], rob2);
        rob1 = temp;
    }
    return rob2;
}