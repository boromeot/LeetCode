/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let res = [];
    let min = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        let a = arr[i],
            b = arr[i + 1];
        if (b - a < min) {
            min = b - a;
            res = [[a, b]];
        } else if (b - a === min) {
            res.push([a, b]);
        }
    }
    return res;
};