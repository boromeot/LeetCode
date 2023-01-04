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
var maxDepth = function(root) {
    if (!root) return 0;

    let l = maxDepth(root.left),
        r = maxDepth(root.right);

    if (!root.left && !root.right) return 1;

    if (!root.left) return 1 + r;

    if (!root.right) return 1 + l;

    return Math.max(l, r) + 1;
};