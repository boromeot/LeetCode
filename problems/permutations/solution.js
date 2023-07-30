/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) { // [1,2,3]
    const res = [];
    const perm = [];
    const chosen = new Array(nums.length).fill(false);

    bt();
    return res;

    function bt() {
        if (perm.length === nums.length) {
            res.push([...perm]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (chosen[i]) continue;
            chosen[i] = true;
            perm.push(nums[i]);
            bt();
            chosen[i] = false;
            perm.pop();
        }
    }
};