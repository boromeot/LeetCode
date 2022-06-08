/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const ROWS = heights.length,
          COLS = heights[0].length;
    
    const pacificSet = new Set();
    const atlanticSet = new Set();
    
    for (let i = 0; i < ROWS; i++) {
        dfs(i, 0, pacificSet, -1);
        dfs(i, COLS - 1, atlanticSet, -1);
    }
    
    for (let j = 0; j < COLS; j++) {
        dfs(0, j, pacificSet, -1);
        dfs(ROWS - 1, j, atlanticSet, -1);
    }
    
    const res = [];
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (pacificSet.has(i + ',' + j) && atlanticSet.has(i + ','+ j)) {
                res.push([i, j]);
            }
        }
    }
    return res;
    
    function dfs(r, c, set, prevHeight) {
        const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        if (r < 0 || r >= ROWS ||
            c < 0 || c >= COLS || 
            set.has(r + ',' + c) ||
            heights[r][c] < prevHeight) {
            return;
        }
        set.add(r + ',' + c);
        const currHeight = heights[r][c];
        
        dfs(r + 1, c, set, currHeight);
        dfs(r - 1, c, set, currHeight);
        dfs(r, c + 1, set, currHeight);
        dfs(r, c - 1, set, currHeight);
        
    }
    
};