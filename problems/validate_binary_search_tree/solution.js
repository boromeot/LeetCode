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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let left = Number.NEGATIVE_INFINITY, 
        right = Number.POSITIVE_INFINITY;
    
    return dfs(root, left, right);
    
    function dfs(root, left, right) {
        if (!root) return true;
        
        if (root.val <= left || root.val >= right) return false;
        
        return (dfs(root.left, left, root.val) && dfs(root.right, root.val, right));
        
    }
};