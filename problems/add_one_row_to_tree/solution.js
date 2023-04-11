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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
      return new TreeNode(val, root, null);
    }
    dfs(root, 1);
    return root;
    function dfs(node, currDepth) {
      if (!node) return;
      if (currDepth === depth - 1) {
        const leftChild = node.left;
        const rightChild = node.right;

        const newLeft = new TreeNode(val, leftChild, null);
        const newRight = new TreeNode(val, null, rightChild);

        node.left = newLeft;
        node.right = newRight;
        return;
      }

      dfs(node.left, currDepth + 1);
      dfs(node.right, currDepth + 1);
    }
};