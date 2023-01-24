/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    if (k > arr.length - 1) return Math.max(...arr);
    let winCount = 0;
    let l = 0, r = 1;
    while (r < arr.length) {
        if (winCount >= k) return arr[l];
        if (arr[l] > arr[r]) {
            r++;
            winCount++;
        } else {
            l = r;
            r = r + 1;
            winCount = 1;
        }
    }
    return arr[l];
};