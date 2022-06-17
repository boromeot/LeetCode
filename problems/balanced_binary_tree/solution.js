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
    return dfs(root)[0];
    
    function dfs(root) {
        if (!root) return [true, 0]; // [isBalanced, depth]
        
        let [leftIsBalanced, leftDepth] = dfs(root.left);
        let [rightIsBalanced, rightDepth] = dfs(root.right);
        
        let isBalanced = (leftIsBalanced && rightIsBalanced) && Math.abs(leftDepth - rightDepth) <= 1;
        let depth = Math.max(leftDepth, rightDepth) + 1;
        
        return [isBalanced, depth];
    }
};

/*

   1
  2 3
 4
5


*/