/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const col = new Set();
    const diag = new Set();
    const antiDiag = new Set();

    let res = 0;

    bt(0);
    return res;

    function bt(i) {
        if (i === n) {
            res++;
            return;
        }

        for (let j = 0; j < n; j++) {
            if (col.has(j) || diag.has(i + j) || antiDiag.has(i - j)) continue;

            col.add(j);
            diag.add(i + j);
            antiDiag.add(i - j);
            
            bt(i + 1);

            col.delete(j);
            diag.delete(i + j);
            antiDiag.delete(i - j);
        }
    }
};