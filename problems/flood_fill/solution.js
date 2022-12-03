/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const ROWSIZE = image.length;
    const COLSIZE = image[0].length;

    dfs(sr, sc, image[sr][sc], color);
    return image;
    
    function dfs(row, col, replaceColor, newColor) {
        if (!isValidCoordinate(row, col)) return;
        
        const currentColor = image[row][col];
        if (currentColor !== replaceColor || image[row][col] === undefined) {
            return;
        }
        image[row][col] = newColor;
        if (isValidCoordinate(row+1,col) && image[row + 1][col] !== newColor) dfs(row + 1, col, replaceColor, newColor);
        if (isValidCoordinate(row-1,col) && image[row - 1][col] !== newColor) dfs(row - 1, col, replaceColor, newColor);
        if (isValidCoordinate(row,col+1) && image[row][col + 1] !== newColor) dfs(row, col + 1, replaceColor, newColor);
        if (isValidCoordinate(row,col-1) && image[row][col - 1] !== newColor) dfs(row, col - 1, replaceColor, newColor);
    }
    
    function isValidCoordinate(r, c) {
        return r >= 0 && r < ROWSIZE && c >= 0 && c < COLSIZE;
    }
};

