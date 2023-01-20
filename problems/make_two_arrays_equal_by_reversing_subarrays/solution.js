/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if (target.length !== arr.length) return false;
    let count = {};

    for (let n of target) {
        count[n] ? count[n]++ : count[n] = 1;
    }

    for (let n of arr) {
        if (!count[n]) return false;
        count[n]--;
    }
    return true;
};