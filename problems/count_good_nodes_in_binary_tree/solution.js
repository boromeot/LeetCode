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
    dfs(root, -Infinity);
    return count;
    
    
    function dfs(root, prev) {
        if (!root) return;
        
        if (root.val >= prev) count++;
        
        dfs(root.left, Math.max(root.val, prev));
        dfs(root.right, Math.max(root.val, prev)); 
    }
};