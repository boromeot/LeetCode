/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rLen = grid.length,
          cLen = grid[0].length;
    const q = [];
    let time = 0,
        fresh = 0,
        rotten = 0;
    
    for (let i = 0; i < rLen; i++) {
        for (let j = 0; j < cLen; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) {
                q.push([i, j]);
                rotten++;
            }
        }
    }
    
    while (q.length > 0 && fresh > 0) {
        const qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            const [r, c] = q.shift();
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (let [dr, dc] of directions) {
                let [newR, newC] = [r + dr, c + dc];
                if (newR < rLen && newR >= 0 &&
                    newC < cLen && newC >= 0 &&
                    grid[newR][newC] === 1
                   )
                {
                    grid[newR][newC] = 2;
                    fresh--;
                    rotten++;
                    q.push([newR, newC]);
                }
            }  
        }
        time++;
    }
    console.log(rotten, fresh, time);
    return fresh > 0 ? -1 : time;
};
// [[2,1,1],
//  [1,1,0],
//  [0,1,1]]
