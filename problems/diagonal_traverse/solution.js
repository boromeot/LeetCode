/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const ROWS = mat.length,
          COLS = mat[0].length;

    const map = {};

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (map[i + j]) {
                map[i + j].push(mat[i][j]);
            } else {
                map[i + j] = [mat[i][j]];
            }
        }
    }
    const output = [];

    for (let [key, val] of Object.entries(map)) {
        if (key % 2) { // odd
            for (let i = 0; i < val.length; i++) {
                output.push(val[i]);
            }
        } else { // even
            for (let i = val.length - 1; i >= 0; i--) {
                output.push(val[i]);
            }
        }
    }

    return output;
};