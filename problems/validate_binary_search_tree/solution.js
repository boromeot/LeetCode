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
    
    return dfs(root, -Infinity, Infinity);
    
    function dfs(root, leftMin, rightMax) {
        if (!root) return true;
        if (root.val >= rightMax) return false;
        if (root.val <= leftMin) return false;
        
        let left = dfs(root.left, leftMin, root.val);
        let right = dfs(root.right, root.val, rightMax);
        
        return left && right;
    }
    
};