/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = {};
    let maxF = 0;
    let res = 0;

    for (let i = 0, j = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
        maxF = Math.max(maxF, map[s[i]]);

        if ((i - j + 1) - maxF <= k) {
            res = Math.max(res, i - j + 1);
        }

        while ((i - j + 1) - maxF > k) {
            map[s[j]]--;
            j++;
        }
    }
    return res;
};