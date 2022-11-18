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
var countNodes = function(root) {
    let res = 0;
    dfs(root);
    return res;
    
    
    function dfs(node) {
        if (!node) return;
        res++;
        dfs(node.left);
        dfs(node.right);
        return;
    }
    
};