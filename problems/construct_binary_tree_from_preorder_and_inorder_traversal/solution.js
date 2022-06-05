/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let p = 0,
        i = 0;
    
    function build(stop) {
        if (inorder[i] != stop) {
            let root = new TreeNode(preorder[p]);
            p++;
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    return build()
};

/*
pre = root, left, right
in = left, root, right

     3
   9   20
      15 7

[3,9,20,15,7] pre
     3
  9    20
15 7

[9,3,15,20,7] in
     9
   3  15
 20 7
*/
