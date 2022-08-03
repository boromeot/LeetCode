/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) { // O(n * m) n = strs.length, m = minLen of strings
    let res = "";
    
    let min = Infinity;
    let mindex = 0;
    
    for (let i = 0; i < strs.length; i++) {
        let s = strs[i];
        
        if (s.length < min) {
            min = s.length;
            mindex = i;
        }
    }

    loop:
    for (let i = 0; i < min; i++) {
        let c = strs[mindex][i];
        
        for (let j = 0; j < strs.length; j++) {
            if (c !== strs[j][i]) {
                break loop;
            }
        }
        res += c;
    }
    return res;
};