/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [];
    const visited = new Set();
    visited.add(0);
    bt([0], 0, visited);
    return res;
    function bt(path, node, visited) {
        if (node === graph.length - 1) {
            res.push(path.slice());
            return;
        }
        
        for (let n of graph[node]) {
            if (!visited.has(n)) {
                visited.add(n);
                path.push(n);
                bt(path, n, visited);
                path.pop();
                visited.delete(n);
            }
        }
        
    }
};