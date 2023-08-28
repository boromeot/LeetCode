/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    const ROWS = board.length;
    const COLS = board[0].length;

    let res = 0;

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (board[i][j] === 'X') {
                res++;
                dfs(i, j);
            }
        }
    }
    return res;

    function dfs(i, j) {
        if (i < 0 || i >= ROWS) return;
        if (j < 0 || j >= COLS) return;
        if (board[i][j] !== 'X') return;
        board[i][j] = '.';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        return;
    }
};