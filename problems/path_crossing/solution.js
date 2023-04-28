/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let coords = [0, 0];
    let set = new Set(['0-0']);

    const map = {
        'N' : (arr) => {arr[1]++; return arr},
        'S' : (arr) => {arr[1]--; return arr},
        'E' : (arr) => {arr[0]++; return arr},
        'W' : (arr) => {arr[0]--; return arr},
    }

    for (let c of path) {
        coords = map[c](coords);
        if (set.has(`${coords[0]}-${coords[1]}`)) return true;
        set.add(`${coords[0]}-${coords[1]}`);
    }
    return false;
};