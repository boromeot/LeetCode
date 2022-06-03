/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const map1 = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!map1.has(c)) {
            map1.set(c, 1);
        } else {
            map1.set(c, map1.get(c) + 1);
        }
    }
    
    for (i = 0; i < t.length; i++) {
        const c = t[i];
        if (!map1.get(c)) return false;
        map1.set(c, map1.get(c) - 1);
    }
    return true;
};