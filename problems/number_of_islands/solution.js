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
        const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const q = [[r, c]];
        
        while (q.length > 0) {
            const qLen = q.length;
            for (let i = 0; i < qLen; i++) {
                const [row, col] = q.shift();
                for (let [dr, dc] of DIRECTIONS) {
                    const [adjR, adjC] = [row + dr, col + dc];
                    if (adjR >= 0 && adjR < ROWS &&
                        adjC >= 0 && adjC < COLS &&
                        grid[adjR][adjC] === '1') {
                        grid[adjR][adjC] = '0';
                        q.push([adjR, adjC]);
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
    
};