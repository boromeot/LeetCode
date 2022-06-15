/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();

    let l = 0,
        r = 0;
    
    let res = 0;
    while (r < s.length) {
        while (set.has(s[r]) && l < r) {
            set.delete(s[l]);
            l++;
        }
        
        set.add(s[r]);
        res = Math.max(res, set.size);
        r++;
    }
    return res;
};

// "pwwkew"
//   l
//    r
// set = [b]