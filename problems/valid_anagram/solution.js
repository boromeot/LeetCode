/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let map = {};
    
    for (let c of s) {
        map[c] ? map[c]++ : map[c] = 1;
    }
    
    let reqLen = s.length;
    
    for (let c of t) {
        if (map[c]) {
            map[c]--;
            reqLen--;
        }
        if (reqLen === 0) return true;
    }
    return false;
};