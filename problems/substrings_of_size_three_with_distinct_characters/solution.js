/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if (s.length < 3) return 0;
    let a, b, c;
    let res = 0;

    for (let i = 0; i < s.length - 2; i++) {
        a = s[i];
        b = s[i + 1];
        c = s[i + 2];
        if (a !== b && a !== c && b !== c) res++;
    }
    return res;
};