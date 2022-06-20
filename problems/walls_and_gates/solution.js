/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const ROWS = rooms.length,
          COLS = rooms[0].length;
    const DIRECTIONS = [[1, 0],[-1, 0], [0, 1], [0, -1]];
    const q = [];
    
    // O(n * m)
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (rooms[i][j] === 0) {
                q.push([i, j]);
            }
        }
    }
    
    bfs();
    
    function bfs() {
        let distance = 0;
        while (q.length) {
            const qLen = q.length;
            distance++;
            for (let i = 0; i < qLen; i++) {
                const [row, col] = q.shift();
                
                for (let [dr, dc] of DIRECTIONS) {
                    const [adjR, adjC] = [row + dr, col + dc];
                    
                    if (adjR < ROWS && adjR >= 0 &&
                        adjC < COLS && adjC >= 0 &&
                        rooms[adjR][adjC] === 2147483647) {
                        rooms[adjR][adjC] = distance;
                        q.push([adjR, adjC]);
                    }
                }
            }
        }
    }
    
};