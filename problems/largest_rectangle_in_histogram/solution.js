/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    let stack = []; // [index, height]

    for (let i = 0; i < heights.length; i++) {
        const h = heights[i];
        let start = i;

        while (stack.length && h < stack.at(-1)[1]) {
            const [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = index;
        }
        stack.push([start, h]);
    }

    for (let i = 0; i < stack.length; i++) {
        const [index, height] = stack[i];
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }
    return maxArea;
};