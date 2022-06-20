/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let components = n;
    
    let parent = new Map();
    let rank = new Map();
    
    for (let i = 0; i < n; i++) {
        parent.set(i, i);
        rank.set(i, 1);
    }
    
    for (let [v1, v2] of edges) {
        if (union(v1, v2)) {
            components--;
        }
    }
    
    return components;
    
    function find(node) { // Returns the representitive of the group
        let p = parent.get(node);
        
        while (p !== parent.get(p)) {
            parent.set(p, parent.get(parent.get(p))); // Path compression
            p = parent.get(p);
        }
        return p;
    }
    
    function union(n1, n2) {
        let p1 = find(n1),
            p2 = find(n2);
        
        if (p1 === p2) return false; // Unionfication is not possible because p1 and p2 are already unioned
    
        if (rank.get(p1) > rank.get(p2)) {
            parent.set(p2, p1);
            rank.set(p1, rank.get(p1) + rank.get(p2));
        } else {
            parent.set(p1, p2);
            rank.get(p2, rank.get(p1) + rank.get(p2));
        }
        return true;
    }
};