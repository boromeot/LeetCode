/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const N = grid.length,
          M = grid[0].length;
    
    let hasCache = [];
    for (let i = 0; i < N; i++) {
        hasCache.push([]);
        for (let j = 0; j < M; j++) {
            hasCache[i].push(false);
        }
    }

    let cache = [];
    for (let i = 0; i < N; i++) {
        cache.push([]);
        for (let j = 0; j < M; j++) {
            cache[i].push(null);
        }
    }
    
    return bt(0, 0);

    function bt(row, col) {
        if (row === N - 1 && col === M - 1) {
            return grid[row][col];
        }

        if (hasCache[row][col]) {
            return cache[row][col];
        }

        let down = Infinity,
            right = Infinity;

        if (row + 1 < N) {
            down = bt(row + 1, col);
        }

        if (col + 1 < M) {
            right = bt(row, col + 1);
        }

        hasCache[row][col] = true;
        cache[row][col] = Math.min(down, right) + grid[row][col];
        return cache[row][col];
    }
};