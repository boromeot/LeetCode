/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const ROWS = heights.length,
          COLS = heights[0].length;
    const pacificSet = new Set(),
          atlanticSet = new Set(); // These sets hold the points that reach each, respectievly
        
    for (let i = 0; i < ROWS; i++) {
        dfs(i, 0, pacificSet, heights[i][0] );
        dfs(i, COLS - 1, atlanticSet, heights[i][COLS - 1]);
    }
    
    for (let j = 0; j < COLS; j++) {
        dfs(0, j, pacificSet, heights[0][j]);
        dfs(ROWS - 1, j, atlanticSet, heights[ROWS - 1][j]);
    }
    
    const res = [];
    
    for (let k = 0; k < ROWS; k++) {
        for (let l = 0; l < COLS; l++) {
            if (pacificSet.has(k + ',' + l) && atlanticSet.has(k + ',' + l)) {
                res.push([k, l]);
            }
        }
    }
    
    return res;
    
    function dfs(r, c, set, prevHeight) {

        if (r < 0 || r >= ROWS ||
            c < 0 || c >= COLS ||
            set.has(r + ',' + c) ||
            heights[r][c] < prevHeight) 
        {
            return 
        }
        
        const currHeight = heights[r][c];
        
        set.add(r + ',' + c);
        
        dfs(r + 1, c, set, currHeight);
        dfs(r - 1, c, set, currHeight);
        dfs(r, c + 1, set, currHeight);
        dfs(r, c - 1, set, currHeight);
    }
};