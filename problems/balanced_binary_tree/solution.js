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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return maxDepth(root)[0]
    
    function maxDepth(root) {
        if (!root) return [true, 0];
    
        let l = maxDepth(root.left),
            r = maxDepth(root.right);
        
        let balanced = Math.abs(l[1] - r[1]) <= 1 && l[0] && r[0];
        let depth = Math.max(l[1], r[1]) + 1;
        return [balanced, depth];
    }
};