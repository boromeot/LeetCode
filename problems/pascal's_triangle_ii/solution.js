/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let oldRow = [1];
    for (let i = 0; i < rowIndex; i++) {
        let newRow = [];
        let l = -1,
            r = 0;
        for (let j = 0; j <= oldRow.length; j++) {
            const left = oldRow[l] || 0;
            const right = oldRow[r] || 0;
            l++, r++;
            newRow.push(left + right);
        }
        oldRow = newRow;
    }
    return oldRow;
};