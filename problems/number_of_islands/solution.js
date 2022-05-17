/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const height = grid.length,
          width = grid[0].length;
    let islands = 0;
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === '1') {
                bfs(i, j);
                islands++;
            }
        }
    }
    
    return islands;
    
    function bfs(row, col) {
        const q = [[row, col]];
        while (q.length > 0) {
            let [r, c] = q.shift();
            if (r < 0 || r >= height || c < 0 || c >= width || grid[r][c] === '0') continue;
            grid[r][c] = '0';
            for (let dir of directions) {
                q.push([r + dir[0], c + dir[1]]);
            }
        }
        
    }
};
// 1 1 1
// 0 1 0
// 1 1 1