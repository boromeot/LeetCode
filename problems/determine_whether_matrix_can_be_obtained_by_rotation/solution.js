/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    for (let i = 0; i < 4; i++) {
        if (isSameMatrix(mat, target)) return true;
        transpose(mat);
        reflect(mat);
    }
    return false;
};

function isSameMatrix(matrix1, matrix2) {
    let n = matrix1.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) return false;
        }
    }
    return true;
}

function transpose(matrix) {
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}

function reflect(matrix) { // reflect over vertical axis
    let n = matrix.length;
    
    for (let i = 0; i < n; i++) { // iterate through every row
        let l = 0, r = n - 1;
        const row = matrix[i];
        while (l < r) {
            let temp = row[l];
            row[l] = row[r];
            row[r] = temp;
            l++, r--;
        }
    }
}