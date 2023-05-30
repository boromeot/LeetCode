/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e','i','o','u']);
    let res = 0,
        count = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (vowels.has(s[j])) count++;
        if (j - i + 1 === k) {
            res = Math.max(res, count);
            if (vowels.has(s[i])) count--;
            i++;
        }
    }
    return res;
};