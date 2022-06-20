/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    let parent = new Map(),
        rank = new Map();
    let components = n;
    
    for (let i = 0; i < n; i++) {
        parent.set(i, i);
        rank.set(i, 1);
    }
    
    for (let [v1, v2] of edges) {
        if (!union(v1, v2)) return false;
    }

    return components === 1;
    
    function find(node) { // Given node return the root
        let p = parent.get(node);
        
        while (p !== parent.get(p)) { // While p is not the root
            parent.set(p, parent.get(parent.get(p))); // Path compression
            p = parent.get(p); // Traverse up the tree
        }
        return p;
    }
    
    function union(n1, n2) { // Combines two unconnected components
        let p1 = find(n1),
            p2 = find(n2);
        
        if (p1 === p2) return false; // Unification is not possible because p1 and p2 are already unioned
        
        if (rank.get(p1) > rank.get(p2)) {
            parent.set(p2, p1);
            rank.set(p1, rank.get(p1) + rank.get(p2));
        } else {
            parent.set(p1, p2);
            rank.get(p2, rank.get(p1) + rank.get(p2));
        }
        components--;
        return true; // Unification was possible
    }
    
};