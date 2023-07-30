/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [];
    const map = {};
    const perm = [];

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
    }

    bt();
    return res;

    function bt() {
        if (perm.length === nums.length) {
            res.push([...perm]);
            return;
        }

        for (let n in map) {
            if (map[n] <= 0) continue;
            perm.push(+n);
            map[n]--;
            bt();
            perm.pop();
            map[n]++;
        }
    }

};