/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const [rLen, cLen] = [grid.length, grid[0].length];
    const visited = new Set();
    let max = 0;
    
    const dfs = (r, c) => {
        const key = r.toString() + ',' + c.toString();
        if (r >= rLen || r < 0 ||
            c >= cLen || c < 0 ||
            grid[r][c] === 0 || 
            visited.has(key)) 
        {
            return 0;
        }
        visited.add(key);
        return (1 + dfs(r, c + 1)
                  + dfs(r, c - 1)
                  + dfs(r + 1, c)
                  + dfs(r - 1, c));
        
    }
    
    for (let i = 0; i < rLen; i++) {
        for (let j = 0; j < cLen; j++) {
            max = Math.max(max, dfs(i, j));
        }
    }
    return max;
};