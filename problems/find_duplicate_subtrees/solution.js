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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const map = {},
          res = [];
    dfs(root);
    return res;

    function dfs(node) {
        if (!node) return '#';
        const left = dfs(node.left);
        const right = dfs(node.right);
        const subTree = `${left}.${right}.${node.val}`
        map[subTree] ? map[subTree]++ : map[subTree] = 1;
        if (map[subTree] === 2) res.push(node);
        return subTree;
    }
};