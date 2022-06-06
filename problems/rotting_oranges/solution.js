/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ROWS = grid.length,
          COLS = grid[0].length;
    
    const q = [];
    let t = 0;
    
    let orangeCount = 0,
        rottenCount = 0;
    
    // O(n * m)
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] !== 0) {
                if ( grid[i][j] === 2) {
                    q.push([i, j]);
                    rottenCount++;
                }
                orangeCount++;
            }
        }
    }
    
    bfs();
    if (rottenCount === orangeCount) {
        return t;
    } else {
        return -1;
    }
    
    function bfs() {
        while (q.length > 0 && rottenCount !== orangeCount) {
            const qLen = q.length;
            for (let i = 0; i < qLen; i++) {
                const [r, c] = q.shift();
                for (const [dr, dc] of DIRECTIONS) { // delta r, delta c
                    const [adjRow, adjCol] = [r + dr, c + dc];
                    //Verifiy contraints of adjacent tiles
                    if (adjRow >= 0 && adjRow < ROWS &&
                        adjCol >= 0 && adjCol < COLS &&
                        grid[adjRow][adjCol] === 1) {
                        rottenCount++;
                        grid[adjRow][adjCol] = 2;
                        q.push([adjRow, adjCol]);
                    } else continue;
                }
            }
            t++;
        }
    }
    
};
// How many oranges there are ?
// Where are the rotten ones at t = 0
// Add the rotten ons to queue for bfs
// after each iteration of bfs set t = t + 1
// once bfs is completed return t if rottenCount === OrangeCount else -1