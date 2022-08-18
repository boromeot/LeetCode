/**
 * @param {number[]} nums
 * @return {number}
 */
var minSetSize = function(nums) { // Time O(3n) -> O(n), Space O(n)
    
    const map = new Map();
    for (let n of nums) {
        map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
    }
    
    const arr = new Array(nums.length + 1);
    for (let [key, val] of map) {
        if (arr[val] === undefined) {
            arr[val] = [];
        }
        arr[val].push(key);
    }

    let sum = 0;
    let res = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) {
            for (let n of arr[i]) {
                sum += i;
                res++;
                if (sum >= nums.length / 2) {
                    return res;
                }
            }
        }   
    }
};