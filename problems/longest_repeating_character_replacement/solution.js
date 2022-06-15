/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = {} // { char : occurences }
    
    let l = 0,
        r = 0;
    
    let maxFreq = 0;
    let res = 0;
    
    while (r < s.length) {
        map[s[r]] === undefined ? map[s[r]] = 1 : map[s[r]]++;
        
        maxFreq = Math.max(maxFreq, map[s[r]]);
        if ((r - l + 1) - maxFreq > k) {
            map[s[l]]--;
            l++;
        }
        
        res = Math.max(res, r - l + 1);
        r++;
    }
    return res;
};

// "AAAB", k = 1
//  l
//     r
/*
{ 
 A: 3,
 B: 2
}


*/