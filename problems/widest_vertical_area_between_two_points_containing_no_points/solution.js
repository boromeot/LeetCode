/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let prev = Infinity;
    let res = 0;
    for (let [x, y] of points) {
        res = Math.max(res, x - prev);
        prev = x;
    }
    return res;
};