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
var minDiffInBST = function(root) {
    let prev = null;
    let min = Infinity;
    dfs(root);
    return min;
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        if (prev) min = Math.min(min, node.val - prev.val);
        prev = node;
        dfs(node.right);
    }

};