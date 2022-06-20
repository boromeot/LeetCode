/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = new Set();
    
    const ROWS = heights.length,
          COLS = heights[0].length;
    
    const pSet = new Map();
    const aSet = new Map();
    
    for (let i = 0; i < ROWS; i++) {
        bfs(i, 0, pSet);
        bfs(i, COLS - 1, aSet);
    }
    
    for (let j = 0; j < COLS; j++) {
        bfs(0, j, pSet);
        bfs(ROWS - 1, j, aSet);
    }
    
    let res = [];
    for (let key of pSet.keys()) {
        if (aSet.has(key)) res.push(aSet.get(key));
    }
    return res;
    
    function bfs(i, j, map) {
        const q = [[i, j]];
        map.set(i+','+j, [i, j]);
        while (q.length) {
            const [row, col] = q.shift();
            for (let [dr, dc] of DIRECTIONS) {
                const [adjR, adjC] = [row + dr, col + dc];
                if (
                    !map.has(adjR + ',' + adjC) &&
                    adjR < ROWS && adjR >= 0 &&
                    adjC < COLS && adjC >= 0 &&
                    heights[adjR][adjC] >= heights[row][col]) {
                    map.set(adjR + ',' + adjC, [adjR, adjC]);
                    visited.add(adjR + ',' + adjC);
                    q.push([adjR, adjC]);
                }
            }
        }
        
    }
};