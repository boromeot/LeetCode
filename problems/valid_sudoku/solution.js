/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i++) {
        const row = new Set();
        const col = new Set();
        const square = new Set();
        for (let j = 0; j < board[i].length; j++) {
            let x = (j % 3) + (3 * (i % 3)),
                y = (Math.floor(j / 3)) + (Math.floor(i / 3) * 3);
            if (row.has(board[i][j]) || 
                col.has(board[j][i]) || 
                square.has(board[x][y])) {
                    return false;
            }
            if (board[i][j] !== '.') row.add(board[i][j])
            if (board[j][i] !== '.') col.add(board[j][i])
            if (board[x][y] !== '.') square.add(board[x][y])
        }
    }
    return true;
};