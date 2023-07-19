/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const permuations = [];
    const perm = [];
    const chosen = new Array(nums.length).fill(false);

    function bt() {
        if (perm.length === nums.length) {
            permuations.push(perm.slice());
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (chosen[i]) continue;
                chosen[i] = true;
                perm.push(nums[i]);
                bt();
                chosen[i] = false;
                perm.pop();
            }
        }
    }

    bt();
    return permuations;
};