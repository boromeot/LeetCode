/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = new Map();
    let res = 0;
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        map.get(s[j]) ? map.set(s[j], map.get(s[j]) + 1) : map.set(s[j], 1);
        
        while ((j - i + 1) - Math.max(...map.values()) > k) {
            map.set(s[i], map.get(s[i]) - 1);
            i++;
        }
        res = Math.max(res, j - i + 1);
        
    }
    return res;
};// AABABBA
