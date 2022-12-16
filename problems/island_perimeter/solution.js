/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    let perimeter = 0;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++ ) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                if (i + 1 < ROWS && grid[i + 1][j] === 1) perimeter--;
                if (i - 1 >= 0 && grid[i - 1][j] === 1) perimeter--;
                if (j + 1 < COLS && grid[i][j + 1] === 1) perimeter--;
                if (j - 1 >= 0 && grid[i][j - 1] === 1) perimeter--;
            }
        }
    }
    return perimeter;
};