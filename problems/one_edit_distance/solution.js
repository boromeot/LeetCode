/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) { // Time O(n), Memory O(1)
    if (Math.abs(s.length - t.length) > 1) return false;
    if (s === t) return false;
    
    let l = 0,
        r = 0;
    let errors = 0;
    
    while (errors <= 1 && (l < s.length || r < t.length)) {
        
        if (s[l] !== t[r]) {
            errors++;
            
            if (s.length < t.length) l--;
            if (t.length < s.length) r--;
        }
        l++;
        r++;
    }
    return errors <= 1;
};