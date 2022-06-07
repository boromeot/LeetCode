/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = [];
    const rank = new Array(edges.length).fill(1);
    for (let i = 0; i < edges.length + 1; i++) {
        parent[i] = i;
    }
    
    for (let [v1, v2] of edges) {
        if (!union(v1, v2)) return [v1, v2];
    }
    
    function find(i) { //Given a node i returns its represenative
        let p = parent[i];
        while (p !== parent[p]) {
            p = parent[p];
        }
        return p;
    }

    
    function union(n1, n2) {
        let p1 = find(n1),
            p2 = find(n2);
        
        if (p1 === p2) {
            return false;
        }
        
        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
        } else {
            parent[p1] = p2;
        }
        return true;
    }
};