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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    const q = [];
    if (root) q.push(root);
    
    while (q.length > 0) {
        const level = [];
        const qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            level.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(level);
    }
    return res;
};