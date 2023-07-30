/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length,
          cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (bt(i, j, 0)) {
                return true;
            }
        }
    }

    return false;

    function bt(r, c, i) {
        // Found path
        if (i === word.length) return true;

        // Out of bounds
        if (r < 0 || c < 0 || r >= rows || c >= cols) return false;
        
        // Wrong char
        if (board[r][c] !== word[i]) return false;

        board[r][c] = null;
        const found = bt(r + 1, c, i + 1) || 
                      bt(r - 1, c, i + 1) || 
                      bt(r, c + 1, i + 1) || 
                      bt(r, c - 1, i + 1)
        
        board[r][c] = word[i];
        
        return found;
    }
};