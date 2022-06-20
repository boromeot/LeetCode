/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null
    
    const oldToNew = new Map();
    
    return dfs(node)
    
    function dfs(root) {
        if (oldToNew.has(root)) return oldToNew.get(root);
        
        const copy = new Node(root.val);
        oldToNew.set(root, copy);
        
        for (let nei of root.neighbors) {
            copy.neighbors.push(dfs(nei));
        }
        return copy;
    }
    
};