/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    let res = 0;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) matrix[i][j] += matrix[i - 1][j];
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i].sort((a, b) => b - a);
        for (let j = 0; j < matrix[i].length; j++) {
            res = Math.max(res, (j + 1) * row[j]);
        }
    }
    return res;
};