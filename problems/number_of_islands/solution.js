/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid) {
        return 0;
    }
    
    const rows = grid.length,
          cols = grid[0].length;
    
    const visited = new Set();
    let islands = 0;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if(grid[r][c] === '1' && !visited.has(r.toString() + ',' + c.toString())) {
                bfs(r, c);
                islands++;
            }
        }
    }
    
    return islands;
    
    function bfs(r, c) {
        let q = [];
        visited.add(r.toString() + c.toString());
        q.push([r, c]);
        
        while(q.length > 0) {
            let [row, col] = q.shift();
            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            for (let [rd, cd] of directions) {
                let [newR, newC] = [row + rd, col + cd];
                if (newR < rows && newR >= 0 &&
                    newC < cols && newC >= 0 &&
                    grid[newR][newC] === '1' &&
                    !visited.has((newR).toString() + ',' + (newC).toString())) 
                {
                    q.push([newR, newC]);
                    visited.add((newR).toString() + ',' + (newC).toString());
                }
            }
            
        }
    }
    
};