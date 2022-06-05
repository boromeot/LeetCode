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
var isBalanced = function(root) {
    return dfs(root)[0];
    function dfs(root) {
        if (!root) return [true, 0];
        
        const l = dfs(root.left);
        const r = dfs(root.right);
        
        const balanced = l[0] && r[0] && Math.abs(l[1] - r[1]) <= 1;
        const depth = Math.max(l[1], r[1]) + 1;
        return [balanced, depth];
    }
};