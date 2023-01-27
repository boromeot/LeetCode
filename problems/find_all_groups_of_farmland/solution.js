/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const res = [];
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) {
            if (land[i][j] === 1) {
                const arr = new Array(4);
                arr[0] = i; arr[1] = j;
                dfs(i, j, arr, land.length, land[i].length);
                res.push(arr);
            }
        }
    }
    return res;

    function dfs(i, j, arr, rows, cols) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || land[i][j] !== 1) return;
        land[i][j] = 0;
        dfs(i + 1, j, arr, rows, cols);
        dfs(i, j + 1, arr, rows, cols);
        if (!arr[2]) arr[2] = i;
        if (!arr[3]) arr[3] = j;
        dfs(i - 1, j, arr, rows, cols);
        dfs(i, j - 1, arr, rows, cols);
    }
};