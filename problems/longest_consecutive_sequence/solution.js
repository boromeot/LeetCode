/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    
    let res = 0;
    
    for (let n of set.values()) {
        if (set.has(n - 1)) continue; // This means n is not the beggining of a sequence
        let count = 1;
        let cur = n;
        
        while (set.has(cur + 1)) {
            cur++;
            count++;
        }
        res = Math.max(res, count);
    }
    return res;
};