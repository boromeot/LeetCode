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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    let LCA;
    let deepest = 0;

    findLCA(root, 0);
    
    return LCA;

    function findLCA(node, depth) {
        deepest = Math.max(deepest, depth);

        if (!node) return depth;

        let l = findLCA(node.left, depth + 1),
            r = findLCA(node.right, depth + 1);

        if (l === deepest && r === deepest) {
            LCA = node;
        }

        return Math.max(l, r);
    }
};