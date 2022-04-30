/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i)); 

        height[i] < height[j] ? i++ : j--;
    }
    return max;
};
    // [1,8,6,2,5,4,8,3,7]
    //  0 1 2 3 4 5 6 7 8