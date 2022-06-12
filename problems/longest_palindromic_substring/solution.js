/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLen = 0,
        minL = 0,
        maxR = 0;
    
    
    for (let i = 0; i < s.length; i++) {
        
        //Even case
        let l = i,
            r = i;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                minL = l;
                maxR = r;
                maxLen = r - l + 1;
            }
            l--;
            r++;
        }
        
        //Odd case
        l = i;
        r = i + 1;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                minL = l;
                maxR = r;
                maxLen = r - l + 1;
            }
            l--;
            r++;
        }
    }
    return s.slice(minL, maxR + 1);
};