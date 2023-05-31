/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length <= 0) return null;
    
    let max = -1;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }

    let root = new TreeNode(max);
    let left = constructMaximumBinaryTree(nums.slice(0, index));
    let right = constructMaximumBinaryTree(nums.slice(index + 1));
    root.left = left;
    root.right = right;
    return root;
};