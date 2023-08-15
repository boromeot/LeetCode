/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = [];
    const map = {};
    for (let i = 0; i < p.length; i++) {
        map[p[i]] ? map[p[i]]++ : map[p[i]] = 1;
    }
    let len = p.length;

    for (let i = 0, j = 0; i < s.length; i++) {
        if (map[s[i]] > 0) len--;
        map[s[i]]--;
        while (len === 0) {
            if (i - j + 1 === p.length) {
                res.push(j);
            }
            if (map[s[j]] >= 0) len++;
            map[s[j]]++;
            j++;
        }

    }
    return res;
};