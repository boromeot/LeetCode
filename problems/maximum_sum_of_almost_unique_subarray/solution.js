/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
    const n = nums.length;
    const map = new Map();
    let res = 0;
    let sum = 0;
    
    for (let i = 0, j = 0; i < n; i++) {
        const num = nums[i];
        sum += num;
        map.get(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
        if (i - j + 1 === k) {
            if (map.size >= m) res = Math.max(res, sum);
            map.set(nums[j], map.get(nums[j]) - 1);
            if (map.get(nums[j]) <= 0) map.delete(nums[j]);
            sum -= nums[j];
            j++;
        }
    }
    return res;
};