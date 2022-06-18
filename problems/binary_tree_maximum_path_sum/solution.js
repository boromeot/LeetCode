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
var maxPathSum = function(root) {
    if (!root) return 0;
    let max = -Infinity;
    dfs(root);
    return max;
    function dfs(root) {
        if (!root) return 0;
        
        let left = Math.max(dfs(root.left), 0);
        let right = Math.max(dfs(root.right), 0);
        
        let splitMax = left + right + root.val;
        max = Math.max(max, splitMax);
        
        return Math.max(left, right) + root.val;
        
    }
    
};