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
 * @return {number}
 */
var goodNodes = function(root) {
    let res = 0;
    dfs(root, root.val);
    return res;
    function dfs(root, max) {
        if (!root) return;
        if (root.val >= max) res++;
        max = Math.max(max, root.val);
        dfs(root.left, max);
        dfs(root.right, max);
    }
};