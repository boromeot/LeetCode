/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    const map = new Map();
    let sum = 0,
        maxSum = 0;

    for (let left = 0, right = 0; right < nums.length; right++) {
        const rNum = nums[right];
        map.get(rNum) ? map.set(rNum, map.get(rNum) + 1) : map.set(rNum, 1);
        sum += rNum;
        while (map.get(rNum) > 1) {
            const lNum = nums[left];
            map.set(lNum, map.get(lNum) - 1);
            sum -= lNum;
            left++;
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};