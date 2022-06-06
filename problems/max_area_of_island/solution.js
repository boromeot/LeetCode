/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ROWS = grid.length,
          COLS = grid[0].length;
    let maxArea = 0;
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1) {
                bfs(i, j);
            }
        }
    }
    return maxArea;

    function bfs(r, c) {
        const q = [[r, c]];
        
        let area = 1;
        grid[r][c] = 0;
        
        while (q.length > 0) {
            const [row, col] = q.shift();
            for (const [dr, dc] of directions) {
                const [adjRow, adjCol] = [row + dr, col + dc]; //Bit of a misnomer because only one axis is changing
                if (adjRow >= 0 && adjRow < ROWS &&
                    adjCol >= 0 && adjCol < COLS &&
                    grid[adjRow][adjCol] === 1) {
                    area++;
                    q.push([adjRow, adjCol]);
                    grid[adjRow][adjCol] = 0;
                }
            }
        }        
        maxArea = Math.max(maxArea, area);
    }
};