/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const dict = {};
    let longest;
    let shortest;
    if (nums1.length > nums2.length) {
        longest = nums1;
        shortest = nums2;
    } else {
        longest = nums2;
        shortest = nums1;
    }

    for (let n of longest) {
        dict[n] ? dict[n]++ : dict[n] = 1;
    }

    const res = [];
    for (let n of shortest) {
        if (dict[n]) {
            res.push(n);
            dict[n]--;
        }
    }
    return res;
};