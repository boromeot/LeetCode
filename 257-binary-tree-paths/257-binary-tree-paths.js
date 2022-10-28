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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    bt(root, '');
    return res;
    
    function bt(root, path) {
        if (!root) return;
        if (!root.left && !root.right) {
            path += root.val;
            res.push(path);
            return;
        }
        bt(root.left, path + root.val + '->');
        bt(root.right, path + root.val + '->');
    }
    
};