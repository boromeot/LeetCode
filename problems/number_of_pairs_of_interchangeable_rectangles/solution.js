/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    let map = new Map();
    let count = 0;

    for (let [w, h] of rectangles) {
        const ratio = w / h;
        map.get(ratio) ? map.set(ratio, map.get(ratio) + 1) : map.set(ratio, 1);
        if (map.get(ratio) >= 2) {
            count += map.get(ratio) - 1;
        }
    }
    return count;
};