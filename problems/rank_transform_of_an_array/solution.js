/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = arr.slice().sort((a, b) => a - b);
    let ranks = {};
    let rank = 1;
    for (let i = 0; i < sorted.length; i++ ) {
        const n = sorted[i];
        if (!ranks[n]) {
            ranks[n] = rank;
            rank++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sorted[i] = ranks[arr[i]];
    }
    return sorted;
};