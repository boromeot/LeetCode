/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    
    let res = [];
    
    for (let i = 0; i < COLS; i++) {
        let row = [];
        for (let j = 0; j < ROWS; j++) {
            row.push(matrix[j][i]);
        }
        res.push(row);
    }
    return res;
};