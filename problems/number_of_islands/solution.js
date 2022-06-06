/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const ROWS = grid.length,
          COLS = grid[0].length;
    let islands = 0;
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === '1') {
                islands++;
                bfs(i, j);
            }
        }
    }
    
    return islands;
    function bfs(r, c) {
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
        
        if (grid[r][c] === '1') {
            grid[r][c] = '0';
        } else {
            return;
        }
        
        bfs(r + 1, c);
        bfs(r - 1, c);
        bfs(r, c + 1);
        bfs(r, c - 1);
    }
    
};