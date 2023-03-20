/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let res = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let end = i + 1;
        let start = n - i;
        let total = start * end;
        let odd = Math.floor(total / 2);
        if (total % 2 === 1) odd++;
        res += odd * arr[i];
    }
    return res;
};