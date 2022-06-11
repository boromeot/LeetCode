/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    const arr = new Array(length + 1).fill(0);
    
    for (let [start, end, inc] of updates) {
        arr[start] += inc;
        arr[end + 1] -= inc;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        arr[i] = sum;
    }
    arr.pop();
    return arr;
};