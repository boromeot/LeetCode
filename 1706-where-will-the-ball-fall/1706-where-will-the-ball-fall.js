/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length - 1;

    const res = [];
    
    for (let i = 0; i <= COLS; i++) {
        let x = i;
        let y = 0;
        
        // while ball hasnt reached a dead end or hasnt finished
        
        while (x >= 0 && x <= COLS && y >= 0 && y <= ROWS) {
            if (y === ROWS) {
                res.push(x);
                break;
            }
            if (grid[y][x] === 1) { // If number pos
                if ((x + 1) <= COLS && grid[y][x + 1] === 1)  { 
                    x += 1;
                    y += 1;
                } else {
                    res.push(-1);
                    break;
                }
            } else { // If number neg
                if ((x - 1) >= 0 && grid[y][x - 1] === -1) {
                    x -= 1;
                    y += 1;
                } else {
                    res.push(-1);
                    break;
                }
            }
        }
    }
    return res;
};


