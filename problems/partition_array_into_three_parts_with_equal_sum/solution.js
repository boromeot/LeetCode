/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((a, b) => a + b);
    if (sum % 3 !== 0) return false;
    let partition = 0;
    let curr = 0;
    for (let i = 0; i < arr.length; i++) {
        curr += arr[i];
        if (curr === sum / 3) {
            partition++;
            curr = 0;
        }
    }
    return partition >= 3;
};