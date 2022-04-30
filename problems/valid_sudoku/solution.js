/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let m = 0;
    let n = 0;
    
    let o = 0;
    let p = 0;
    
    for (let i = 0; i < board.length; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        let boxSet = new Set();
        
        for (let j = 0; j < board[i].length; j++) {
            let rowS = board[i][j];
            if (rowS !== '.') {
                if (rowSet.has(rowS)) {
                    return false;
                }
                rowSet.add(rowS);
            }
            
            let colS = board[n][m];
            if (colS !== '.') {
                if (colSet.has(colS)) {
                    return false;
                }
                colSet.add(colS);
            }
            n++;
            
             if (p % 3 === 0 && p !== 0) {
                if (i < 3) {
                    p = 0;                    
                } else if (i < 6) {
                    p = 3;
                } else {
                    p = 6;
                }
                if (o % 8 === 0 && o !== 0) {
                    o = 0;
                } else {
                    o++;
                }
            } 
            
            let boxS = board[o][p];
            if (boxS !== '.') {
                if (boxSet.has(boxS)) {
                    return false;
                }
                boxSet.add(boxS);
            }
            p++;
        }
        n = 0;
        m++;
    }
    return true;
};
    
         