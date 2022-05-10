/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adjMap = {};
    
    for (let i = 0; i < numCourses; i++) {
        adjMap[i] = [];
    }
    
    for (let [c, p] of prerequisites) {
        adjMap[c].push(p);
    }
    
    const res = [];
    const visited = new Set(),
          cycle = new Set();
    
    for (let crs = 0; crs < numCourses; crs++) {
        if (!dfs(crs)) return [];
    }
    return res;
    
    function dfs(crs) {
        if (cycle.has(crs)) return false;
        if (visited.has(crs)) return true;
        
        cycle.add(crs);
        
        for (let pre of adjMap[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        cycle.delete(crs);
        visited.add(crs);
        res.push(crs);
        return true;
    }
};