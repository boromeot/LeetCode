/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const count = {};
    for (let n of arr) {
        count[n] ? count[n]++ : count[n] = 1;
        if (count[n] >  arr.length / 4) return n;
    }
};