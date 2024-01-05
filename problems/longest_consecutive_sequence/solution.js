/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);

    let res = 0;
    for (const n of set) {
        if (set.has(n - 1)) continue;
        let count = 1;
        let num = n;
        while (set.has(num + 1)) {
            num++;
            count++;
        }
        res = Math.max(res, count);
    }
    return res;
};