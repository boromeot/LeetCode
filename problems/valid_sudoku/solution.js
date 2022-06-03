/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const ROWS = board.length;
    const COLS = board[0].length;
    
    for (let i = 0; i < ROWS; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        const boxSet = new Set();
        
        for (let j = 0; j < COLS; j++) {
            let r = (Math.floor(i / 3) * 3) + Math.floor(j / 3);
            let c = 3 * (i % 3) + (j % 3);
            
            if (board[i][j] !== '.') {
                if (rowSet.has(board[i][j])) return false;
                rowSet.add(board[i][j]);
            }
            
            if (board[j][i] !== '.') {
                if (colSet.has(board[j][i])) return false;
                colSet.add(board[j][i]);
            }
            
            if (board[r][c] !== '.') {
                if (boxSet.has(board[r][c])) return false;
                boxSet.add(board[r][c]);
            }
            
        }
    }
    return true;
};