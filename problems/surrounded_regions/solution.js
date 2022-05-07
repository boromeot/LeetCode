/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rLen = board.length,
          cLen = board[0].length;
    
    for (let r = 0; r < rLen; r++) {
        if (board[r][0] === 'O') {
            bfs(r, 0);
        } 
        if (board[r][cLen - 1] === 'O') {
            bfs(r, cLen - 1);
        }
    }
    
    for (let c = 0; c < cLen; c++) {
        if (board[0][c] === 'O') {
            bfs(0, c);
        }
        if (board[rLen - 1][c] === 'O') {
            bfs(rLen - 1, c);
        }
    }
    for (let i = 0; i < rLen; i++) {
        for (let j = 0; j < cLen; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
            if (board[i][j] === 'T') {
                board[i][j] = 'O';
            }
        }
    }
    
    function bfs(r, c) {
        if (board[r][c] === 'T') return;
        const q = [];
        board[r][c] = 'T';
        q.push([r, c]);
        while (q.length > 0) {
            let [row, col] = q.shift();
            const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];
            for (let [dr, dc] of directions) {
                let [newR, newC] = [row + dr, col + dc];
                if (newR < rLen && newR >= 0 &&
                    newC < cLen && newC >= 0 &&
                    board[newR][newC] === 'O') 
                {
                    q.push([newR, newC]);
                    board[newR][newC] = 'T';
                }
            }
        }
    }
    
};