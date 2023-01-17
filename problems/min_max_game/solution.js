/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
    const newArray = [];
    for (let i = 0; i < n / 2; i++) {
        if (i % 2 === 0) newArray.push(Math.min(nums[2 * i], nums[2 * i + 1]));
        else newArray.push(Math.max(nums[2 * i], nums[2 * i + 1]));
    }
    return minMaxGame(newArray);
};