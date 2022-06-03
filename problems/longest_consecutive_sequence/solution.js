/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums === null || nums.length <= 0) return 0;
    
    const set = new Set(nums);
    let res = 0;
    for (let n of set) {
        if (set.has(n - 1)) continue;
        let length = 1;
        let curr = n;
        while (set.has(curr + 1)) {
            length++;
            curr++;
        }
        res = Math.max(res, length);
    }
    return res;
};