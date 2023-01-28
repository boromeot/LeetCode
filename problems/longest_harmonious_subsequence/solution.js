/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map();

    for (let n of nums) {
        map.get(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
    }
    let max = 0;
    map.forEach((count, n) => {
        if (map.has(n + 1)) {
            max = Math.max(max, map.get(n) + map.get(n + 1));
        }
    })
    return max;
};