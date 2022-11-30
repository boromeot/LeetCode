/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {};
    
    for (let n of arr) {
        map[n] ? map[n]++ : map[n] = 1;
    }

    const set = new Set();
    
    for (let v of Object.values(map)) {
        if (set.has(v)) return false;
        set.add(v)
    }
    return true;
};