/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const res = [];
    const xorPre = [];
    xorPre.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        xorPre.push(arr[i] ^ xorPre[i - 1]);
    }

    for (let [start, end] of queries) {
        res.push(xorPre[start] ^ xorPre[end] ^ arr[start]);
    }
    return res;
};