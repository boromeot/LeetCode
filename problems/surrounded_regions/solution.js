/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const ROWS = board.length,
          COLS = board[0].length;

    
    for (let i = 0; i < ROWS; i++) {
        dfs(i, 0);
        dfs(i, COLS - 1);
    }
    
    for (let j = 0; j < COLS; j++) {
        dfs(0, j);
        dfs(ROWS - 1, j);
    }
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'T') {
                board[i][j] = 'O';
            }
        }
    }
    
    function dfs(r, c) {
        if (r < 0 || r >= ROWS ||
            c < 0 || c >= COLS ||
            board[r][c] !== 'O') {
            return;
        }
        
        board[r][c] = 'T';
        
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    
};