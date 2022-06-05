/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return dfs(p, q);
    function dfs(root1, root2) {
        if (!root1 && !root2) return true;
        if (!root1 && root2) return false;
        if (root1 && !root2) return false;
        
        let l = dfs(root1.left, root2.left);
        let r = dfs(root1.right, root2.right);
        
        return l && r && root1.val === root2.val;
    }
};