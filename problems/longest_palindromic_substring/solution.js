/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let minL = 0,
        maxR = 0,
        maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        let l = i,
            r = i;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            let curLen = r - l + 1;
            if (curLen > maxLen) {
                maxLen = curLen;
                minL = l;
                maxR = r;
            }
            l--;
            r++;
        }
        
        l = i,
        r = i + 1;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            let curLen = r - l + 1;
            if (curLen > maxLen) {
                maxLen = curLen;
                minL = l;
                maxR = r;
            }
            l--;
            r++;
        }
    }
    return s.slice(minL, maxR + 1);
};