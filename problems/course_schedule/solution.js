/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const nodeToPrereqs = {};
    const path = new Set();
    
    for (let i = 0; i < numCourses; i++) {
        nodeToPrereqs[i] = [];
    }
    for (let [n1, n2] of prerequisites) {
        nodeToPrereqs[n1].push(n2);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
    
    function dfs(node) {
        if (nodeToPrereqs[node].length === 0) {
            return true;
        }
        if (path.has(node)) return false;
        
        path.add(node);
        
        for (let prereq of nodeToPrereqs[node]) {
            if (!dfs(prereq)) return false;
        }
        path.delete(node);
        nodeToPrereqs[node] = [];
        return true;
    }
    
};