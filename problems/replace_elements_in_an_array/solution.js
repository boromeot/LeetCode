/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    let map = new Map();

    nums.forEach((n, i) => {
        map.set(n, i);
    });

    for (let [a, b] of operations) {
        map.set(b, map.get(a));
        map.delete(a);
    }
    const res = new Array(nums.length);
    map.forEach((val, key) => {
        res[val] = key;
    });
    
    return res;
};