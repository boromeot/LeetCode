/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    const count = new Map();
    let totalPairs = 0;
    let res = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
        const n = nums[i];
        if (count.get(n) !== undefined) totalPairs += count.get(n), count.set(n, count.get(n) + 1);
        else count.set(n, 1);
        while (totalPairs >= k) {
            const m = nums[j];
            count.set(m, count.get(m) - 1);
            totalPairs -= count.get(m);
            res += nums.length - i;
            j++;
        }
    }
    return res;
};