/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const aArea = (ax2 - ax1) * (ay2 - ay1);
    const bArea = (bx2 - bx1) * (by2 - by1);
    
    const top = Math.min(ay2, by2);
    const bot = Math.max(ay1, by1);
    const yOverlap = top - bot;
    
    const left = Math.max(ax1, bx1);
    const right = Math.min(ax2, bx2);
    const xOverlap = right - left;
    
    let overlapArea = 0;
    
    if (xOverlap > 0 && yOverlap > 0) {
        overlapArea = xOverlap * yOverlap;
    }
    return aArea + bArea - overlapArea;
};