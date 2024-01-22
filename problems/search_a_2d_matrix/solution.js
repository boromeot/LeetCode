/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rowIndex = findRow(matrix, target);
    const row = matrix[rowIndex];
    
    let l = 0; r = row.length - 1;

    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        const n = row[m];
        if (n === target) return true;
        else if (n < target) l = m + 1;
        else if (n > target) r = m - 1;
    }
    return false;
};

function findRow(matrix, target) {
    let l = 0, r = matrix.length - 1;
    let m;
    while (l <= r) {
        m = l + Math.floor((r - l) / 2);
        const [start, end] = [matrix[m].at(0), matrix[m].at(-1)];
        if (start <= target && target <= end) break;
        else if (end < target) l = m + 1;
        else if (target < start) r = m - 1;
    }
    return m;
}