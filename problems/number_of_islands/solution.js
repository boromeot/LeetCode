/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //dfs
    let islands = 0;
    
    let rows = grid.length,
        cols = grid[0].length;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                islands++;
            }
        }
    }
    
    return islands
    
    function dfs(r, c) {
        if (r < 0 || r == rows || c < 0 || c === cols) return;
        
        if (grid[r][c] === '1') {
            grid[r][c] = '0';
        } else {
            return;
        }
        
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
};