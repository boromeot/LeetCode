/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        map.get(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    }
    const arr = new Array(nums.length);
    for (let [k, v] of map) {
        arr[v] ? arr[v].push(k) : arr[v] = [k];
    }

    const res = [];
    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j]) {
            for (let o = 0; o < arr[j].length; o++) {
            res.push(arr[j][o]);
                if (res.length >= k) {
                    return res;
                }
            }
        }     
    }
};  