/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] < b[0] ? -1 : 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    });
    
    const adj = {};
    
    for (let [src, dst] of tickets) {
        if (!adj[src]) adj[src] = [];
        adj[src].push(dst);
    }
    
    const res = ['JFK'];
    dfs('JFK');
    return res;
    function dfs(src) {
        if (res.length === tickets.length + 1) return true;
        if (adj[src] === undefined) return false;
        
        const temp = adj[src].slice();
        for (let i = 0; i < temp.length; i++) {
            const v = temp[i];
            adj[src].splice(i, 1);
            res.push(v);
            if (dfs(v)) return true;
            adj[src].splice(i, 0, v);
            res.pop(v)
        }
        
    }
    
};