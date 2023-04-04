/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const M = obstacleGrid.length; 
    const N = obstacleGrid[0].length;

    let row = new Array(N).fill(0);
    if (obstacleGrid[0][0] === 0) row[0] = 1;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++)  {
            if (obstacleGrid[i][j] === 1) row[j] = 0;
            else row[j] = row[j] + (row[j - 1] || 0);
        }
    }
    return row[N - 1];
};