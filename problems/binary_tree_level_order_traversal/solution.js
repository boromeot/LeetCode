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
    if (!root) return [];
    const res = [];
    
    bfs();
    
    return res;
    
    function bfs() {
        const q = [];
        q.push(root);
        
        while (q.length > 0) {
            const qLen = q.length;
            const level = [];
            for (let i = 0; i < qLen; i++) {
                let node = q.shift();
                level.push(node.val);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            res.push(level);
        }
    }
};