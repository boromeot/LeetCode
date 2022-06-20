/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ROWS = grid.length,
          COLS = grid[0].length;
    let islands = 0;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === '1') {
                bfs(i, j);
                islands++;
            }
        }
    }
    return islands;
    function bfs(i, j) {
        const q = [[i, j]];
        grid[i][j] = '0';
        
        while (q.length) {
            const [row, col] = q.shift();
            for (let [dr, dc] of DIRECTIONS) {
                const [adjR, adjC] = [row + dr, col + dc];
                if (adjR < ROWS && adjR >= 0 &&
                    adjC < COLS && adjC >= 0 &&
                    grid[adjR][adjC] === '1') {
                    q.push([adjR, adjC]);
                    grid[adjR][adjC] = '0';
                }
            }
        }
    }
    

}
    
    function dfs(r, c) {
        if (r < 0 || r >= ROWS ||
            c < 0 || c >= COLS ||
            grid[r][c] === '0')  return;
        
        grid[r][c] = '0';
        
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    