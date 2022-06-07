/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const path = new Set();
    const ctp = {};
    
    for (let i = 0; i < numCourses; i++) {
        ctp[i] = [];
    }
    
    for (let [course, prereq] of prerequisites) {
        ctp[course].push(prereq);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
    
    function dfs(course) {
        if (path.has(course)) return false;
        if (ctp[course].length === 0) return true;
        
        path.add(course);
        
        for (let prereq of ctp[course]) {
            if (!dfs(prereq)) return false;
        }
        ctp[course] = [];
        path.delete(course);
        return true;
    }
    
}; 