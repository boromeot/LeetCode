/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const parent = new Map(); //Given node, returns the panret of the node
    const rank = new Map(); //Given node, returns the amount of nodes in component
    
    for (let i = 0; i < n; i++) {
        parent.set(i, i);
    }
    
    for (let i = 0; i < n; i++) {
        rank.set(i, 1);
    }
    
    let components = n;
    
    for (let [n1, n2] of edges) {
        if (union(n1, n2)) components--;
    }
    
    return components;
    
    function find(node) { //Given node, Returns the graphs root
        let p = parent.get(node);
        
        while (p !== parent.get(p)) {
            parent.set(p, parent.get(parent.get(p))); //Path compression 
            p = parent.get(p);
        }
        return p;
    }
    
    function union(n1, n2) {
        const p1 = find(n1),
              p2 = find(n2);
        
        if (p1 === p2) return false; //Unification was unsuccessful because p1 and p2 are already unified
        
        if (rank.get(p1) > rank.get(p2)) {
            parent.set(p2, p1);
            rank.set(p1, rank.get(p1) + rank.get(p2));
        } else {
            parent.set(p1, p2);
            rank.set(p2, rank.get(p1) + rank.get(p2));
        }
        return true; //Unifcation successful
    }
};