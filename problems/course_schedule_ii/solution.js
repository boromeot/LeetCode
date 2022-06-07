/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const visited = new Set();
    const path = new Set();
    
    const ctp = {};
    const topologicalOrdering = [];
    
    for (let i = 0; i < numCourses; i++) {
        ctp[i] = [];
    }
    
    for (let [course, prereq] of prerequisites) {
        ctp[course].push(prereq);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }
    return topologicalOrdering;
    
    function dfs(course) {
        if (path.has(course)) return false; //If this course is a part of a cycle
        if (visited.has(course)) return true;
  
        path.add(course);
        
        for (let prereq of ctp[course]) {
            if (!dfs(prereq)) {
                return false;
            } // meanign if the prereq is part of a cycle
        }
        path.delete(course);
        visited.add(course);
        topologicalOrdering.push(course);
        return true;
    }
     
};