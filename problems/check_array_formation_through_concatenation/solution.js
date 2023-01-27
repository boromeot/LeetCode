/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let map = new Map();
    pieces.forEach(arr => {map.set(arr[0], arr)});

    for (let i = 0; i < arr.length;) {
        const n = arr[i];
        if (!map.has(n)) return false;
        const piece = map.get(n);

        for (let part of piece) {
            if (part !== arr[i]) return false;
            i++;
        }
    }
    return true;
};