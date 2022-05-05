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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let q = [root];
    let res = [];
    
    while (q[0]) {
        let row = [];
        let qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            let node = q.shift();
            row.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(row.at(-1));
    }
    return res;
};