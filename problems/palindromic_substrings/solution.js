/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        //Odd case
        let l = i,
            r = i;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            count++;
            l--;
            r++;
        }
        
        //Even case
        l = i,
        r = i + 1;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            count++;
            l--;
            r++;
        }
    }
    return count;
};