/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const map = {};
    
    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }
    
    for (let [c, p] of prerequisites) {
        map[c].push(p);
    }
    
    const visited = new Set();
    
    for (let crs = 0; crs < numCourses; crs++) {
        if (!dfs(crs)) return false;
    }
    return true;
    
    function dfs(crs) {
        if (visited.has(crs)) return false;
        if (map[crs].length === 0) return true;
        visited.add(crs);
        
        for (let pre of map[crs]) {
            if (!dfs(pre)) return false;
        }
        visited.delete(crs);
        map[crs] = [];
        return true;
    }
    
};