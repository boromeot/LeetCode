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
    if (!node) return node;
    
    const oldToNew = new Map();
    
    return dfs(node)
    
    function dfs(node) {
        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }
        
        const copy = new Node(node.val);
        oldToNew.set(node, copy);
        
        for (let neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    }
};