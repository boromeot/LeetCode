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
    if (!node) return null;
    const oldToNew = new Map();
    
    const dfs = node => {
        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }
        
        const copy = new Node(node.val);
        oldToNew.set(node, copy);
        
        for (let i = 0; i < node.neighbors.length; i++) {
            const neighbor = node.neighbors[i];
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    }
    return dfs(node); 
};