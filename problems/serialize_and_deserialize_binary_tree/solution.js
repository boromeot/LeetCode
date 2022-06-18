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
 */
var serialize = function(root) {
    const nums = [];
    dfs(root);
    return nums.join(',')
    
    function dfs(root) { // inorder traversal
        if (!root) {
            nums.push('n');
            return;
        }
        
        nums.push(root.val);
        dfs(root.left);
        dfs(root.right)        ;
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',');
    let i = 0;
    return dfs();
    
    function dfs() {
        if (data[i] === 'n') {
            i++;
            return null;
        }
        let root = new TreeNode(Number(data[i]));
        i++;
        root.left = dfs();
        root.right = dfs();
        return root;
    }
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */