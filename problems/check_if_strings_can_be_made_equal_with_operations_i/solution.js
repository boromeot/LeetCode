/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    if (s1 === s2) return true;
    const n = s1.length;
    
    for (let i = 0; i < n; i++) {
        if (s1[i] === s2[i] || s1[i] === s2[(i + 2) % n]) continue;
        return false;
    }
    return true;
};