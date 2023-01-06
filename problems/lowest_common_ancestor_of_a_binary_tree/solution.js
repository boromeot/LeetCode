/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let LCA;
    dfs(root);
    return LCA;

    function dfs(node) {
        // Current node is not p or q
        if (!node) return false;

        let mid = node === p || node === q ? 1 : 0;

        let left = dfs(node.left) ? 1 : 0;

        let right = dfs(node.right) ? 1 : 0;

        if (mid + left + right >= 2) LCA = node;

        return left + mid + right >= 1;
    }
};