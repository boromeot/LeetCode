/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const res = [];
    const bucket = new Array(nums.length);
    
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    
    for (let [k, v] of map) {
        if (bucket[v]) {
            bucket[v].push(k);
        } else {
            bucket[v] = [k];
        }
    }
    
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            for (let j = 0; j < bucket[i].length; j++) {
                res.push(bucket[i][j]);
                if (res.length === k) return res;
            }
        }
    }    
};