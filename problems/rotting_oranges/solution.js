/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const DIRECTIONS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const ROWS = grid.length,
          COLS = grid[0].length;
    const q = [];
    let time = 0;
    
    
    let fresh = 0,
        rotten = 0;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } else if (grid[i][j] === 2) {
                rotten++;
                q.push([i, j]);
            }
        }
    }
    bfs();
    
    if (fresh) {
        return -1;
    } 
    if (fresh === rotten) return 0;
    return time - 1;
    
    function bfs() {
        while (q.length) {
            const qLen = q.length;
            for (let i = 0; i < qLen; i++) {
                const [row, col] = q.shift();
                for (let [dr, dc] of DIRECTIONS) {
                    const [adjR, adjC] = [row + dr, col + dc];
                    if (adjR < ROWS && adjR >= 0 &&
                        adjC < COLS && adjC >= 0 &&
                        grid[adjR][adjC] === 1) {
                        q.push([adjR, adjC]);
                        grid[adjR][adjC] = 2;
                        rotten++;
                        fresh--;
                    }
                }
            }
            time++;
        }
    }
};