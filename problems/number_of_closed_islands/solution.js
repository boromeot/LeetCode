/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const row = grid.length;
    const col = grid[0].length;

    let count = 0;
    let surronded;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 0) {
                surronded = true;
                dfs(i, j);
                if (surronded) {
                    count++;
                }
            }
        }
    }
    return count;

    function dfs(i, j) {
        if (i < 0 || i >= row ||
            j < 0 || j >= col) {
            surronded = false;
            return;
        }
        if (grid[i][j] === 1) return;
        grid[i][j] = 1;

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
};