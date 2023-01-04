/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];
    const adj = {};
    for (let i = 0; i < n; i++) {
        adj[i] = new Set();
    }
    for (let [u, v] of edges) {
        adj[u].add(v);
        adj[v].add(u);
    }

    let leaves = [];
    for (let k of Object.keys(adj)) {
        if (adj[k].size === 1) leaves.push(k);
    }
    while (n > 2) {
        n -= leaves.length;
        const newLeaves = [];
        for (let leaf of leaves) {
            let nextLeaf = adj[leaf].values().next().value;
            adj[nextLeaf].delete(+leaf);
            if (adj[nextLeaf].size === 1) newLeaves.push(nextLeaf);
        }
        leaves = newLeaves;
    }
    return leaves;
};