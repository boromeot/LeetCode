/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const BOXSIZE = 3;
    
    const rows = new Array(BOXSIZE).fill(0);
    const cols = new Array(BOXSIZE).fill(0);
    let diag = 0;
    let antiDiag = 0;

    let val;
    for (let i = 0; i < moves.length; i++) {
        let [row, col] = moves[i];
        
        if (i % 2 === 0) val = 1;
        else val = -1;
        
        rows[row] += val;
        cols[col] += val;
        if (row - col === 0) diag += val
        if (row + col === BOXSIZE - 1) antiDiag += val
        if (winner(rows[row], cols[col], diag, antiDiag, BOXSIZE)) {
            return val === 1 ? 'A' : 'B';
        }
    }
    if (moves.length === BOXSIZE * BOXSIZE) return 'Draw';
    return 'Pending';
};

function winner(row, col, d, ad, boxsize) {
    if (Math.abs(row) === boxsize) return true;
    if (Math.abs(col) === boxsize) return true;
    if (Math.abs(d) === boxsize) return true;
    if (Math.abs(ad) === boxsize) return true;
    return false;
}