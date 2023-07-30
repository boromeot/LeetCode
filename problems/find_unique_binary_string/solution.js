/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let res;
    let perm = [];
    let set = new Set(nums);

    bt();
    return res;

    function bt() {
        if (res) return;
        if (perm.length === nums[0].length) {
            if (!set.has(perm.join(''))) {
                res = perm.join('');
            }
            return;
        }

        perm.push('0');
        bt();
        perm.pop();
        perm.push('1');
        bt()
        perm.pop();
    }
};