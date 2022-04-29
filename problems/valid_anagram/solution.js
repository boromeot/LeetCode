/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let sMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        sMap.has(c) ? sMap.set(c, sMap.get(c) + 1) : sMap.set(c, 1);
    }
    
    let tMap = new Map();
    
    for (let j = 0; j < t.length; j++) {
        let c = t[j];
        tMap.has(c) ? tMap.set(c, tMap.get(c) + 1) : tMap.set(c, 1);
    }
    
    
    for (let [k, v] of sMap) {
        if (tMap.get(k) !== v) {
            return false;
        }
    }
    return true;
};
    // zzzzzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaaaaaa
    // aaaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzzzz