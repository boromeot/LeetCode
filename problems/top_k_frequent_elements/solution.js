/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
    }
    
    let bucket = new Array(nums.length);
    for (let [k, v] of map) {
        bucket[v] ? bucket[v].push(k) : bucket[v] = [k];
    }
    let answer = [];
    for (let j = bucket.length - 1; j >= 0; j--) {
        if (bucket[j]) {
            for (let num of bucket[j]) {
                answer.push(num);
                if (answer.length >= k) {
                    return answer;
                }
            }
        }
    }
};