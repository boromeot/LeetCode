/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    let max = 1;
    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i],
            next = arr[i + 1];
        if (Math.abs(curr - next) > 1) {
            arr[i + 1] = curr + 1;
        }
        max = Math.max(max, arr[i + 1]);
    }
    return max;
};