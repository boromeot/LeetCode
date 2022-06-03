/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // O(n) time, O(1) space
    let l = 0,
        r = height.length - 1;
    
    let maxL = height[l],
        maxR = height[r];
    
    let sum = 0;
    while (l < r) {
        if (maxL < maxR) {
            l++;
            // The trapped water at position l is equal to the MIN of the maxL and maxR retaining walls. If this case is reached that means maxL is the min of all right retaining walls
            const water = maxL - height[l] > 0 ? maxL - height[l] : 0;
            sum += water;
            maxL = Math.max(maxL, height[l]);
        } else {
            r--;
            const water = maxR - height[r] > 0 ? maxR - height[r] : 0;
            sum += water;
            maxR = Math.max(maxR, height[r]);
        }
    }
    
    return sum
};