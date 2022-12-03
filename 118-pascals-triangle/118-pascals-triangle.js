/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]];
    
    for (let i = 0; i < numRows -1; i++) {
        const oldRow = res[i];
        const newRow = [];
        let l = -1,
            r = 0;
        
        for (let j = 0; j < oldRow.length + 1; j++) {
            const leftNum = oldRow[l] || 0;
            const rightNum = oldRow[r] || 0;
            newRow.push(leftNum + rightNum);
            l++;
            r++;
        }
        res.push(newRow);
    }
    return res;
};