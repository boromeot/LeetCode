/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const ROWS = grid.length,
          COLS = grid[0].length;
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    let res = 0;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1) {
                bfs(i, j);
            }
        }
    }
    return res;
    
    function bfs(i, j) {
        let area = 1;
        grid[i][j] = 0;
        const q = [[i, j]];
        while (q.length) {
            const [row, col] = q.shift();
            for (let [dr, dc] of DIRECTIONS) {
                const [adjR, adjC] = [row + dr, col + dc];
                if (adjR < ROWS && adjR >= 0 &&
                    adjC < COLS && adjC >= 0 &&
                    grid[adjR][adjC] === 1) {
                    grid[adjR][adjC] = 0;
                    area++;
                    q.push([adjR, adjC]);
                }
            }   
        }
        res = Math.max(res, area);
    }
};


/*

iterate over every cell
if cell === 1
bfs(x, y);

function bfs() {
    cosnt q = [];
    let area = 0;
    
    
}

*/