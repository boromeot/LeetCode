/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let rowSum = new Array(mat.length).fill(0),
        colSum = new Array(mat[0].length).fill(0);
    let res = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                rowSum[i]++;
                colSum[j]++;
            }
        }
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1 && rowSum[i] === 1 && colSum[j] === 1) {
                res++;
            }
        }
    }
    return res;
};