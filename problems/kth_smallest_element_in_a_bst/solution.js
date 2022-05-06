/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const nums = [];
    
    dfs(root);
    console.log(nums)
    return nums[k - 1];
    function dfs(root) {
        if ((!root)) return;
        dfs(root.left);
        nums.push(root.val);
        if (nums.length === k) {
            return;
        }
        dfs(root.right);
    }
};