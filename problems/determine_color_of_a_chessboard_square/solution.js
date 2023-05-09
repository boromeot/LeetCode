/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const [x, y] = [coordinates[0], coordinates[1]];
    return getBit(x) ^ (Number(y) - 1) % 2;
};

function getBit(c) {
    return (c.charCodeAt(0) + 1) % 2;
}