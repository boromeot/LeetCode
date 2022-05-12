/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let l = 0,
        r = height.length - 1;
    
    while (l < r) {
        let minHeight = Math.min(height[l], height[r]);
        max = Math.max(max, minHeight * (r - l));
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max;
};
    // [1,8,6,2,5,4,8,3,7]
    //  0 1 2 3 4 5 6 7 8