/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = []; // Monotonic decreasing stack
    let map = {};
    for (let n of nums2) {
        while (stack.at(-1) !== undefined && n > stack.at(-1)) {
            map[stack.pop()] = n;
        }
        stack.push(n);
    }
    
    let res = [];
    
    for (let n of nums1) {
        res.push(map[n] || -1);
    }
    return res;
};