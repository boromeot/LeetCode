/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const rank = new Array(n).fill(1);
    const parents = new Array(n);
    let components = n; //I have n components 
    
    for (let i = 0; i < n; i++) {
        parents[i] = i;
    }
    
    
    for (let [n1, n2] of edges) {
        if (!union(n1, n2)) return false;
    }
    return components <= 1;
    
    
    
    function find(node) {
        let p = parents[node];
        
        while (p !== parents[p]) { // While p is not its own parent.
            parents[p] = parents[parents[p]];
            p = parents[p];
        }
        return p;
    }
    
    function union(n1, n2) { //Unions the graph of n1 and n2. Returns true if the operation was successful,                                      false otherwise.
        let p1 = find(n1),
            p2 = find(n2);
        
        if (p1 === p2) return false; //Union impossible because the two nodes are already unified.
        
        if (rank[p1] > rank[p2]) {
            parents[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parents[p1] = p2;
            rank[p2] += rank[p1];
        }
        components--;
        return true;
        
    }
    
};