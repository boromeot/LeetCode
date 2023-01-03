/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = {}; // {crs, [preq]}
    let visit = new Set();

    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }

    for (let [c, p] of prerequisites) {
        map[c].push(p);
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;

    function dfs(c) {
        if (visit.has(c)) return false;
        if (map[c].length === 0) return true;
        visit.add(c);
        for (let p of map[c]) {
            if (!dfs(p)) return false;
        }
        visit.delete(c);
        map[c] = [];
        return true;
    }
};