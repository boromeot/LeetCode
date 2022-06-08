/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = [];
    const rank = new Array(edges.length).fill(1);
    
    for (let i = 0; i < edges.length; i++) {
        parent[i] = i;
    }
    
    function find(node) {
        let currParent = parent[node];
        while (currParent !== parent[currParent]) {
            parent[currParent] = parent[parent[currParent]]; // PATH compression
            currParent = parent[currParent];
        }
        return currParent;
    }
    
    for (let [n1, n2] of edges) {
        if (!union(n1, n2)) return [n1, n2];
    }
     
    function union(n1, n2) {
        let p1 = find(n1),
            p2 = find(n2);
        
        if (p1 === p2) return false; //Unable to unify
        
        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }
        
        return true; //Was able to unify
    }
};