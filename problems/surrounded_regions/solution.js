/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const DIRECTIONS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const ROWS = board.length,
          COLS = board[0].length;
    
    for (let i = 0; i < ROWS ; i++) {
        bfs(i, 0);
        bfs(i, COLS - 1);
    }
    
    for (let j = 0; j < COLS; j++) {
        bfs(0, j);
        bfs(ROWS - 1, j);
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
    
    function bfs(i, j) {
        const q = [[i, j]];
        if (board[i][j] !== 'O') return;
        board[i][j] = 'T';
        while (q.length) {
            const [row, col] = q.pop(); // Could possibly use pop to increase speed
            for (let [dr, dc] of DIRECTIONS) {
                const [adjR, adjC] = [row + dr, col + dc];
                if (adjR >= 0 && adjR < ROWS &&
                    adjC >= 0 && adjC < COLS &&
                    board[adjR][adjC] === 'O') {
                    board[adjR][adjC] = 'T';
                    q.push([adjR, adjC]);
                }
            }
        }
    }
    
};