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
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const q = [root];
    
    bfs();
    return res;
    function bfs() {
        while (q.length > 0) {
            let qLen = q.length;
            let level = [];
            for (let i = 0; i < qLen; i++) {
                const node = q.shift();
                if (res.length % 2 === 0) {
                    level.push(node.val);                
                } else {
                    level.unshift(node.val);
                }
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);            
            } 
            res.push(level);
        }
    }
};