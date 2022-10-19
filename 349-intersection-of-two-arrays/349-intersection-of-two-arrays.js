/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    let set = new Set(nums1);
    let set2 = new Set(nums2);
    let res = [];
    
    for (let n of set) {
        if (set2.has(n)) res.push(n);
    }
    
    return res;
};