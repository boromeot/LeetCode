/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {} // { num: count }
    
    for (let n of nums) {
        map[n] ? map[n]++ : map[n] = 1;
    }
        
    // const freq = new Array(nums.length + 1).from([]); // [[], [], []...]
    const freq = Array.from({ length: nums.length + 1 }, () => [])
    
    for (let [num, count] of Object.entries(map)) {
        freq[count].push(num);
    }
    
    const res = [];    
    
    for (let i = freq.length - 1; i >= 0; i--) {
        for (let n of freq[i]) {
            res.push(n);
            if (res.length === k) return res;
        }
    }
};