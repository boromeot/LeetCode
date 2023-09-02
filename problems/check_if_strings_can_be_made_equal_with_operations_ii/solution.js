/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    const n = s1.length;
    
    let map1 = {},
        map2 = {};
    
    for (let i = 0; i < n; i += 2) {
        map1[s1[i]] ? map1[s1[i]]++ : map1[s1[i]] = 1;
        map2[s2[i]] ? map2[s2[i]]++ : map2[s2[i]] = 1;
    }
    
    for (let key in map1) {
        if (!map2[key]) return false;
        if (map1[key] !== map2[key]) return false;
    }
    
    map1 = {},
    map2 = {};
    
    for (let i = 1; i < n; i += 2) {
        map1[s1[i]] ? map1[s1[i]]++ : map1[s1[i]] = 1;
        map2[s2[i]] ? map2[s2[i]]++ : map2[s2[i]] = 1;
    }
    
    for (let key in map1) {
        if (!map2[key]) return false;
        if (map1[key] !== map2[key]) return false;
    }
    return true;
    
};