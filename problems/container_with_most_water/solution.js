/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    
    let l = 0,
        r = height.length - 1;
    // height = Math.min(height[l], height[r]) -> Math.min(1, 7) -> 1
    // width = r - l -> 8 - 0 -> 8
    
    while (l < r) {
        let h = Math.min(height[l], height[r]);
        let w = r - l;
        let area = h * w;
        max = Math.max(max, area);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;        
        }
    }
    return max;
};