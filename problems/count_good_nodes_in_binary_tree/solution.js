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
    let count = 0;
    
    dfs(root, root.val);
    return count;
    
    function dfs(root, maxVal) {
        if (!root) return;
        
        if (root.val >= maxVal) count++;
        dfs(root.left, Math.max(root.val, maxVal));
        dfs(root.right, Math.max(root.val, maxVal));
    }
};