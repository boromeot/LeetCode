/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const numsLen = nums.length;
    let res = [];
    bt([], nums);
    return res;
    
    function bt(perm, choices) {
        if (perm.length === numsLen) {
            res.push(perm.slice());
            return;
        }
        
        for (let i = 0; i < choices.length; i++) {
            let n = choices.shift();
            perm.push(n);
            bt(perm, choices);
            choices.push(n)
            perm.pop();
        }
        
    }
    
};