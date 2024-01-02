/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    [a, b, c] = [a, b, c].sort((a, b) => a - b);
    const dist1 = b - a - 1;
    const dist2 = c - b - 1;
    let min, max;

    if (dist1 === 0 && dist2 === 0) {
        min = 0;
        max = 0;
    } else if (dist1 === 0 || dist2 === 0 || dist1 === 1 || dist2 === 1) {
        min = 1;
        max = dist1 + dist2;
    } else {
        min = 2;
        max = dist1 + dist2;
    }
    return [min, max];
};