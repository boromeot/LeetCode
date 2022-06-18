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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = null;
    dfs(root);
    return res;
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        k--;
        if (k === 0) {
            res = root.val;
            return;
        }
        dfs(root.right);
    }
};

// root left right = preorder
// left root right = inorder
// left right root = postorder