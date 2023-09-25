/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function(s) {
    let repeaters = 0;
    let res = 0;
    for (let i = 0, j = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]) repeaters++;
        while (repeaters > 1) {
            if (s[j] === s[j + 1]) repeaters--;
            j++;
        }
        res = Math.max(i - j + 1, res);
    }
    return res;
};