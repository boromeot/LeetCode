/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const ROWS = board.length,
          COLS = board[0].length;
    
    for (let i = 0; i < ROWS; i++) {
        let rowSet = new Set(),
            colSet = new Set(),
            boxSet = new Set();
        
        for (let j = 0; j < COLS; j++) {
            let x = (j % 3) + (3 * (i % 3)),
                y = (Math.floor(j / 3)) + (Math.floor(i / 3) * 3);
            
            if (rowSet.has(board[i][j]) ||
                colSet.has(board[j][i]) ||
                boxSet.has(board[y][x])) {
                return false;
            }
            if (board[i][j] !== '.') rowSet.add(board[i][j]);
            if (board[j][i] !== '.') colSet.add(board[j][i]);
            if (board[y][x] !== '.') boxSet.add(board[y][x]);
        }
    }
    return true
};


