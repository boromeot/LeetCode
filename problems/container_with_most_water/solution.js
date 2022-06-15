/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let max = 0;
    
    let l = 0,
        r = heights.length - 1;
    
    while (l < r) {
        const height = Math.min(heights[l], heights[r]);
        const width = r - l;
        max = Math.max(max, height * width);
        
        if (heights[l] < heights[r]) {
            l++;
        } else {
            r--;
        }
    }
    
    return max;
};

// [1,8,6,2,5,4,8,3,7]
//    l           r

// []

// area = height * width
// height is Math.min(leftBar, rightBar)
// width is distance between them => r - l