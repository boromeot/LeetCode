/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = {}; // [ crs, [...preReqs]]
    
    for (let i = 0; i < numCourses; i++) {
        adj[i] = [];
    }
    
    for (let [crs, req] of prerequisites) {
        adj[crs].push(req);
    }
    
    const path = new Set();
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
    
    function dfs(i) {
        if (path.has(i)) return false;
        if (adj[i].length === 0) {
            return true;
        } 
        
        path.add(i);
        
        for (let prereq of adj[i]) {
            if (!dfs(prereq)) return false;
        }
        path.delete(i);
        adj[i] = []; //Optimization
        return true;
    }
    
    
};