/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    
    let longestSeq = 0;
    let l = 0;
    
    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        longestSeq = Math.max(longestSeq, r - l + 1);
        set.add(s[r]);
    }
    
    return longestSeq;
};