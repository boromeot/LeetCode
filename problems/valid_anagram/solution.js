/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const map = {};
    
    for (let c of s) {
        if (map[c] !== undefined) {
          map[c]++;
        } else {
            map[c] = 1;
        }
    }
    
    let reqLen = s.length;
    
    for (let c of t) {
        if (map[c]) reqLen--; // Everytime it encounters a valid char the reqLen decreases
        map[c]--;
        if (reqLen === 0) return true;
    }
    return false;
};