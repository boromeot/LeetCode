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
var maxDepth = function(root) {
    if (!root) return 0;
    let maxDepth = 1;
    dfs(root, maxDepth);
    return maxDepth;
    
    
    function dfs(node, depth) {
        if (!node) {
            return;
        }
        maxDepth = Math.max(maxDepth, depth);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
};