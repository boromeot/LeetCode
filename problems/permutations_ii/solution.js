/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // [1,1,2]
    const permutations = [];
    const map = {};
    const perm = [];
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
    }
    bt();
    return permutations;

    function bt() {
        if (perm.length === nums.length) {
            permutations.push(perm.slice());
            return;
        } 

        for (const n in map) {
            if (map[n] > 0) {
                perm.push(+n);
                map[n]--;
            
                bt();
                perm.pop();
                map[n]++;
            }
        }
    }
};