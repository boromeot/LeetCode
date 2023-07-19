/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length;
    const res = [];
    const set = [];

    function search(k) {
        if (k === n) {
            res.push(set.slice());
        } else {
            set.push(nums[k]);
            search(k + 1);
            set.pop();
            search(k + 1);
        }
    }

    search(0);
    return res;
};