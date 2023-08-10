/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const col = new Set();
    
    const diag = new Set(),
          antiDiag = new Set();

    const board = [];
    for (let i = 0; i < n; i++) {
        board.push(new Array(n).fill('.'));
    }

    const res = [];

    bt(0);
    return res;

    function bt(r) {
        if (r === n) {
            let solution = [];
            for (let i = 0; i < board.length; i++) {
                solution.push(board[i].join(''));
            }
            res.push(solution);
            return;
        }

        for (let c = 0; c < n; c++) {
            if (col.has(c) || diag.has(r + c) || antiDiag.has(r - c)) continue;

            col.add(c);
            diag.add(r + c);
            antiDiag.add(r - c);

            board[r][c] = 'Q';

            bt(r + 1);

            col.delete(c);
            diag.delete(r + c);
            antiDiag.delete(r - c);

            board[r][c] = '.';
        }
    }
};