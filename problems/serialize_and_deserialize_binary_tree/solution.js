/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 
               v1l0pN,
        v2n1p0,       v3n2p0,
   vNn3p1, vNn4p1, v4n4p2, v5n5p2
   
   parent = Math.floor((i - 1) / 2); -1 / 2 => -0.5 => 0
   i = 0;
   leftChild = (i / 2) + 1; 0 + 1 => 1
   rightChild = (i / 2) + 2; => 0 + 2 => 2
 */
var serialize = function(root) {
    const arr = [];
    dfs(root);
    
    function dfs(root) {
        if (!root) {
            arr.push('n');
            return;
        }
        arr.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    return arr.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(s) {
    let arr = s.split(',');
    let i = 0;
    return dfs();
    function dfs() {
        if (arr[i] === 'n') {
            i++;
            return null;
        }
        const node = new TreeNode(Number(arr[i]));
        i++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */