/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // transpose
    transpose(matrix);
    reflect(matrix);
};

function transpose(matrix) {
    let  n = matrix.length;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}

function reflect(matrix) {
    let n = matrix.length;
    for (let i = 0; i < matrix.length; i++) {
        let l = 0, r = n - 1;
        while (l < r) {
            let temp = matrix[i][l];
            matrix[i][l] = matrix[i][r];
            matrix[i][r] = temp;
            l++, r--;
        }
    }
}