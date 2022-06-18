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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false;
    if (isSametree(root, subRoot)) return true;
    
    let left = isSubtree(root.left, subRoot);
    let right = isSubtree(root.right, subRoot);
    return left || right;
    
    function isSametree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;
        
        let left = isSametree(p.left, q.left);
        let right = isSametree(p.right, q.right);
        return left && right;
    }
};