/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const answer = new Array(2);
    answer[0] = [];
    answer[1] = [];
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    for (let n of set1) {
        if (set2.has(n)) {
            set1.delete(n);
            set2.delete(n);
        }
    }

    for (let n of set2) {
        if (set1.has(n)) {
            set1.delete(n);
            set2.delete(n);
        }
    }
    return [Array.from(set1), Array.from(set2)];
};