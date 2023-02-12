/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let cutLength = arr.length * 0.05;
    arr.sort((a,b) => a - b);
    let sum = 0;
    for (let i = cutLength; i < arr.length - cutLength; i++) {
        sum += arr[i];
    }
    return sum / (arr.length - (cutLength * 2));
};