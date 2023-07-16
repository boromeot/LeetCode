/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    const N = colsum.length;
    const upperRow = new Array(N).fill(0);
    const lowerRow = new Array(N).fill(0);

    for (let i = 0; i < colsum.length; i++) {
        const v = colsum[i];
        if (v === 1) {
            if (upper > lower) {
                upperRow[i] = 1;
                upper--;
            } else {
                lowerRow[i] = 1;
                lower--;
            }
        } else if (v === 2) {
            upperRow[i] = 1;
            lowerRow[i] = 1;
            upper--;
            lower--;
        }
    }
    if (upper === 0 && lower === 0) return [upperRow, lowerRow];
    return [];
};