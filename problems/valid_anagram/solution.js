/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let count = {};
    for (let c of s) {
        count[c] ? count[c]++ : count[c] = 1;
    }

    for (let c of t) {
        if (count[c] === undefined) return false;
        if (count[c] <= 0) return false;
        count[c]--;
    }
    return true;
};