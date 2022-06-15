/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/*
reqLen = 0 -> 1
A, B
l
r
min = Infinity 
 A : 1*/
var minWindow = function(s, t) {
    if (t.length > s.length) return '';
    
    let reqLen = t.length;
    const map = {};
    
    for (let c of t) {
        map[c] === undefined ? map[c] = 1 : map[c]++;
    }
    
    let l = 0,
        r = 0;
    
    let minL, minR;
    let minLen = Infinity;
    
    while (r < s.length) {
        if (map[s[r]] > 0) {
            reqLen--;
        }
        map[s[r]]--;
        while (reqLen === 0) {
            if (r - l + 1 < minLen) {
                minL = l,
                minR = r;        
                minLen = r - l + 1;
            }
            if (map[s[l]] === 0) {
                reqLen++;
            }
            map[s[l]]++;
            l++;
        }
        
        r++;
    }
    if (minL === undefined || minR === undefined) return '';
    return s.slice(minL, minR + 1);
};