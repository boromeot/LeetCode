/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let count = {};
    let max = 0;
    let res;
    for (let i = 0; i <= nums.length - 2; i++) {
        let n = nums[i],
            target = nums[i + 1];

        if (n === key) {
            if (count[target]) {
                count[target]++;
            } else {
                count[target] = 1;
            }
            if (count[target] > max) res = target;
            max = Math.max(max, count[target]);
        }
    }
    return res;
};