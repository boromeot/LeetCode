/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *//* T = 13
[ 1, 3, 5, 7] 0
[10,11,16,20] 1 m
[23,30,34,60] 2
  0  1  2  3
*/
var searchMatrix = function(matrix, target) {
    const ROWS = matrix.length,
          COLS = matrix[0].length;
    //First find which row its in
    let rowL = 0,
        rowR = ROWS - 1;
    let targetRow;
    while (rowL <= rowR) {
        let rowM = Math.floor((rowL + rowR) / 2);
        
        let leftNum = matrix[rowM][0];
        let rightNum = matrix[rowM][COLS - 1];
        
        if (leftNum <= target && target <= rightNum) {
            targetRow = rowM;
            break;
        } else if (target < leftNum) {
            rowR = rowM - 1;
        } else if (target > rightNum) {
            rowL = rowM + 1;
        }
    }
    
    if (targetRow === undefined) return false;
    
    let l = 0,
        r = COLS - 1;
    
    while (l <= r) {
        let m = Math.floor((r + l) / 2);
        let num = matrix[targetRow][m];
        if (num < target) {
            l = m + 1;
        } else if (num > target) {
            r = m - 1;
        } else {
            return true;
        }
    }
    return false;
};


