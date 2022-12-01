/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]; 
    });
    
    const merged = new Array();
    
    for (let interval of intervals) {
        
        if (merged.length === 0 || merged.at(-1)[1] < interval[0]) {
            merged.push(interval);
        } else {
            merged.at(-1)[1] = Math.max(merged.at(-1)[1], interval[1]);
        }
    }
    return merged;
};