/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(t, c) {
    const y = (t - 4 * c) / -2;
    const x = c - y;
    if (x < 0 || y < 0) return [];
    if (x % 1 || y % 1) return [];
    return [x, y]
};