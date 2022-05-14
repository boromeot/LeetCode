/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length - 1,
          cols = matrix[0].length - 1;
    
    let t = 0,
        b = rows,
        c;
    while (t <= b) {
        c = Math.trunc((t + b) / 2);
        if (matrix[c][0] <= target && target <= matrix[c][cols]) break;
        
        if (target < matrix[c][0]) {
            b = c - 1;
        } else if (matrix[c][cols] < target) {
            t = c + 1;
        }
    }
    
    let l = 0,
        r = cols;
    
    while (l <= r) {
        let m = Math.trunc((l + r) / 2);
        
        if (matrix[c][m] === target) return true;
        
        if (matrix[c][m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return false;
};