/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
    const nums1Powers = {}
    const nums2Powers = {}

    for (let n of nums1) {
        const power = Math.pow(n, 2);
        nums1Powers[power] ? nums1Powers[power]++ : nums1Powers[power] = 1;
    }

    for (let n of nums2) {
        const power = Math.pow(n, 2);
        nums2Powers[power] ? nums2Powers[power]++ : nums2Powers[power] = 1;
    }

    let count = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = i + 1; j < nums1.length; j++) {
            const pair = nums1[i] * nums1[j];
            if (nums2Powers[pair]) count += nums2Powers[pair];
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        for (let j = i + 1; j < nums2.length; j++) {
            const pair = nums2[i] * nums2[j];
            if (nums1Powers[pair]) count += nums1Powers[pair];
        }
    }
    return count;
};