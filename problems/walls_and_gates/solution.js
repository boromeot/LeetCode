/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ROWS = rooms.length,
          COLS = rooms[0].length;

    const q = [];
    // O(N)
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
        while (q.length > 0) {
            const qLen = q.length;
            distance++;
            for (let i = 0; i < qLen; i++) {
                const [r, c] = q.shift();
                for (let [dr, dc] of DIRECTIONS) {
                    const [adjRow, adjCol] = [r + dr, c + dc];
                    //Verifiy inputs
                    if (adjRow >= 0 && adjRow < ROWS &&
                        adjCol >= 0 && adjCol < COLS &&
                        rooms[adjRow][adjCol] === 2147483647) {
                        rooms[adjRow][adjCol] = distance;
                        q.push([adjRow, adjCol]);
                    }
                }
            }
        }
    }
};