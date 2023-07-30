/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const sub = [];

    bt(0);
    return res;

    function bt(i) {
        if (i === nums.length) {
            res.push(sub.slice());
        } else {
            bt(i + 1);
            sub.push(nums[i]);
            bt(i + 1);
            sub.pop();
        }
        return;
    }

};