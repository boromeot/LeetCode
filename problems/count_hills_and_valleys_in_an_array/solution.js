/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let prev = nums[0];
    let hills = 0,
        valleys = 0;
    
    for (let i = 1; i < nums.length - 1; i++) {
        const num = nums[i];
        
        if (prev < num && num > nums[i + 1]) {
            hills++;
            prev = num;
        } else if (prev > num && num < nums[i + 1]) {
            valleys++;
            prev = num;
        }
    }
    return hills + valleys;
};