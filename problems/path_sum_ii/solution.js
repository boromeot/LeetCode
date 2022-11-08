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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) return [];
    let res = [];
    bt([], 0, root);
    return res;
    
    function bt(path, sum, node) {
        path.push(node.val);
        sum += node.val;
        if (!node.left && !node.right && sum === targetSum) {
            res.push(path.slice());
            return;
        }
        if (node.left) {
            bt(path, sum, node.left);
            path.pop();
        }
        if (node.right) {
            bt(path, sum, node.right);
            path.pop();
        }
    }
    
};