/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let map = {};
    let l = 0,
        r = 0;

    while (l < nums1.length && r < nums2.length) {
        let [id1, val1] = nums1[l],
            [id2, val2] = nums2[r];

        if (l < nums1.length)

        if (id1 < id2) {
            map[id1] ? map[id1] += val1 : map[id1] = val1;
            l++;
        } else {
            map[id2] ? map[id2] += val1 : map[id2] = val2;
            r++;
        }
    }

    for (; r < nums2.length; r++) {
        const [id, val] = nums2[r];
        map[id] ? map[id] += val : map[id] = val;
    }

    for (; l < nums1.length; l++) {
        const [id, val] = nums1[l];
        map[id] ? map[id] += val : map[id] = val;
    }

    let res = [];
    for (let id of Object.keys(map)) {
        res.push([id, map[id]]);
    }
    return res;
};