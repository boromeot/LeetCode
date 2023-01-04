/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const n = edges.length + 1;
    const count = new Array(n + 1).fill(0);
    for (let [u, v] of edges) {
        count[u]++;
        count[v]++;
        if (count[u] === n - 1) return u;
        if (count[v] === n - 1) return v;
    }
};