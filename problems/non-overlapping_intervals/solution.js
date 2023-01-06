/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // Sort start times in non-descending order 
    intervals.sort((a, b) => a[0] - b[0]);
    
    let removals = 0;
    for (let i = 0; i < intervals.length - 1; i++) {
        let [x1, y1] = intervals[i];
        let [x2, y2] = intervals[i + 1];

        if (x2 < y1) {
            intervals[i + 1][0] = Math.min(x1, x2);
            intervals[i + 1][1] = Math.min(y1, y2);
            removals++;
        }
    }
    return removals;
};