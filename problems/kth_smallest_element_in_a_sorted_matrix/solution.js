/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let l = matrix[0][0],
        r = matrix[matrix.length - 1][matrix.length - 1];
    
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        let c = 0;
        
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] <= mid) c++;
                else break;
            }
        }
        if (c < k) l = mid + 1;
        else r = mid;
    }
    return l;
};