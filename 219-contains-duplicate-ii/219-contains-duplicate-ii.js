/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if ((map[nums[i]] !== undefined) && Math.abs(map[nums[i]] - i) <= k) {
            return true;
        }
        map[nums[i]] = i;
    }

    return false;
};


// {
//     1: 0,
//     2: 1,
//     3: 2,
//     1: 3
// }