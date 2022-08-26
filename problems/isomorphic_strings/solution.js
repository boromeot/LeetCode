/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) { // Time O(n), Space O(n)
    let map = {};
    let set = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] && map[s[i]] !== t[i]) return false;
        if (!map[s[i]] && set.has(t[i])) return false;
        set.add(t[i]);
        map[s[i]] = t[i];
    }
    return true;
};