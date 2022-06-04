/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    const map = new Map();
    for (let i = 0; i < t.length; i++) {
        const c = t[i];
        map.get(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
    }

    let subString = '';
    
    let reqLen = t.length;
    
    let l = 0,
        r = 0;
    
    while (r <= s.length) {
        const c = s[r];
        if (map.get(c) > 0) reqLen--;
        if (map.has(c)) map.set(c, map.get(c) - 1);
        
        if (reqLen <= 0) {
            while ((map.get(s[l]) < 0 || map.get(s[l]) === undefined) && l < s.length) {
                if (map.get(s[l]) < 0) map.set(s[l], map.get(s[l]) + 1);
                l++;
            }
            
            if (subString) {
                if (r - l + 1 < subString.length) subString = s.slice(l, r + 1);
            } else {
                subString = s.slice(l, r + 1);
            }
        }
        r++;
    }
    return subString;
};