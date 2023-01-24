/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    const ROWS = grid2.length,
          COLS = grid2[0].length;
    let subIsland;
    let subIslandCount = 0;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid2[i][j] === 1) {
                subIsland = true;
                dfs(i, j);
                if (subIsland) subIslandCount++;
            }
        }
    }
    return subIslandCount;

    function dfs(i, j) {
        if ((i < 0 || i >= ROWS) || (j < 0 || j >= COLS) || grid2[i][j] !== 1) return;
        if (grid1[i][j] !== 1) subIsland = false;
        grid2[i][j] = 0;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        return;
    }
};