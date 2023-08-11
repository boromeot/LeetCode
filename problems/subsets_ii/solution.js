/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    bt(0, []);
    return res;

    function bt(i, subset) {
        if (i === nums.length) {
            res.push(subset.slice());
            return;
        }

        // With nums[i];
        subset.push(nums[i]);
        bt(i + 1, subset);
        subset.pop();

        // Without
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
        bt(i + 1, subset);
    }
};