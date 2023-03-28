/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let beg = 0,
        end = arr.length;

    while (beg < end) {
        let mid = Math.floor((beg + end) / 2);
        if (arr[mid] - 1 - mid < k)  {
            beg = mid + 1;
        } else {
            end = mid;
        }
    }
    return end + k;
};