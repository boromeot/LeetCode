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
var getMinimumDifference = function(root) {
    let min = Infinity;
    let arr = [];
    dfs(root);
    for (let i = 0; i < arr.length; i++) {
        let prev = arr[i - 1] === undefined ? Infinity : arr[i - 1],
            curr = arr[i];
        min = Math.min(min, Math.abs(prev - curr));
    }
    console.log(arr)
    return min;

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    }
};