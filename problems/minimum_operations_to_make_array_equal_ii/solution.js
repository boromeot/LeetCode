/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums1, nums2, k) {
    if (k === 0) {
        for (let i = 0; i < nums1.length; i++) {
            if (nums1[i] !== nums2[i]) return -1
        }
        return 0;
    }
    let sum = 0;
    let pos = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (Math.abs(nums1[i] - nums2[i]) % k) return -1;
        sum += nums1[i] - nums2[i];
        if (nums1[i] - nums2[i] > 0) pos += nums1[i] - nums2[i];
    }
    if (sum !== 0) return -1;
    return pos / k;
};

// [-3, 0, 6, -3]