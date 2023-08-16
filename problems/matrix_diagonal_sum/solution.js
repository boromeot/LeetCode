/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j === n - 1) sum += mat[i][j];
            if (i - j === 0) sum += mat[i][j];
        }
    }
    if (n % 2 === 1) sum -= mat[n / 2 >> 0][n / 2 >> 0];
    return sum;
};