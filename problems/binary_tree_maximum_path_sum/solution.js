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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = root.val;
    dfs(root);
    return max;
    function dfs(root) {
        //[potentialGains, sumWithMeAsAncestor]
        if (!root) return 0;
        
        let leftMax = Math.max(dfs(root.left), 0);
        let rightMax = Math.max(dfs(root.right), 0);
        let splitMax = leftMax + rightMax + root.val;
        
        max = Math.max(max, splitMax);
        
        return Math.max(leftMax, rightMax) + root.val;
    }
};