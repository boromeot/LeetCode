/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    // Sort balloons by starting positions 
    points.sort((a, b) => a[0] - b[0]);

    // Iterate through balloons and merge overlapping balloons
    let arrows = points.length;
    for (let i = 0; i < points.length - 1; i++) { 
        let [x1, y1] = points[i],
            [x2, y2] = points[i + 1];

        // Merging overlapping baloons
        if (x2 <= y1) {
            points[i + 1][0] = Math.max(x1, x2);
            points[i + 1][1] = Math.min(y1, y2);
            arrows--;
        } 
    }
    return arrows;
};