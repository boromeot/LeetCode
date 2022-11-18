/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let res = new Array(nums1.length);
    
    for (let i = 0; i < nums2.length; i++) {
        let n = nums2[i];
        map[n] = i;
    }

    for (let i = 0; i < nums1.length; i++) {
        let n = nums1[i];
        let j = map[n];
        
        while (j < nums2.length) {
            if (nums2[j] > n) {
                res[i] = nums2[j];
                break;
            }
            j++;
        }
        if (j === nums2.length) {
            res[i] = -1;
        }
    }
    return res;
};