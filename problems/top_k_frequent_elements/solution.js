/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    
    for (let n of nums) {
        map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
    }

    const arr = new Array(nums.length + 1).fill().map(() => [])
    for (let [k, v] of map.entries()) {
        arr[v].push(k);
    }
    const res = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let n of arr[i]) {
            res.push(n);
            if (res.length === k) return res;
        }
    }
    
};