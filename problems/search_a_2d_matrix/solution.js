/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let l = 0, r = rows -1;

    let targetRow;

    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        const leftNum = matrix[m][0],
              rightNum = matrix[m][cols - 1];
        if (leftNum <= target && target <= rightNum) {
            targetRow = m;
            break;
        }

        if (leftNum > target) r = m - 1;
        if (rightNum < target) l = m + 1;
    }

    if (targetRow === undefined) return false;
    
    l = 0, r = cols - 1;
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        const num = matrix[targetRow][m];
        if (num === target) return true;

        if (num < target) l = m + 1;
        if (num > target) r = m - 1;
    }
    return false;
}

//    0, 1, 2, 3
// 0  0, 1, 2, 3
// 1  4, 5, 6, 7
// 2  8, 9, 10, 11
