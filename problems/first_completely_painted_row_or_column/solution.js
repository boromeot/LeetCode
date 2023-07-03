/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const n = mat.length;
    const m = mat[0].length;

    const rows = new Array(n).fill(0);
    const cols = new Array(m).fill(0);

    const map = {};

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const num = mat[i][j];
            map[num] = [i, j];
        }
    }


    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const row = map[num][0];
        const col = map[num][1];
        rows[row]++;
        cols[col]++;
        if (rows[row] === m) return i;
        if (cols[col] === n) return i;
    }
    return -1;
};

/*
    4,3,5
    1,2,6
 */