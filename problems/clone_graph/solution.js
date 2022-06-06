/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
// 1 <--> 2
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(root) {
    if (!root) return null;
    const oldToNew = new Map();
    return dfs(root);
    
    function dfs(node) {
        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }
        
        const copy = new Node(node.val);
        oldToNew.set(node, copy);
        
        for (let i = 0; i < node.neighbors.length; i++) {
            const neighborCopy = dfs(node.neighbors[i]);
            copy.neighbors.push(neighborCopy);
        }
        return copy;
    }
};