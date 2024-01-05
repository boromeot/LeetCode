/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {};
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        count[n] ? count[n]++ : count[n] = 1;
    }
    let arr = new Array(nums.length);

    for (const [k, v] of Object.entries(count)) {
        arr[v] ? arr[v].push(k) : arr[v] = [k];
    }
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        
        if (arr[i]) {
            for (let j = 0; j < arr[i].length; j++) {
                res.push(arr[i][j]);
                if (res.length === k) return res;
            }
        }
    }

};