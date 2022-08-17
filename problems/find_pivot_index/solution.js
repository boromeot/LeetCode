/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) { // Time O(2n) -> O(n), Space O(1)
    let lSum = 0,
        rSum = 0;
    
    for (let n of nums) {
        rSum += n;
    }
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        lSum += n;
        if (lSum === rSum) return i;
        rSum -= n;
    }
    return -1;
};