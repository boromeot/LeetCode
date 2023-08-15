/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return '';

    let map = {};
    for (let i = 0; i < t.length; i++) {
        map[t[i]] ? map[t[i]]++ : map[t[i]] = 1;
    }
    let len = t.length;

    let resLen = s.length;
    let res = [0, 0];

    for (let i = 0, j = 0; i < s.length; i++) {
        if (map[s[i]] > 0) len--;
        map[s[i]]--;
        while (len === 0) {
            if (i - j + 1 <= resLen) {
                resLen = i - j + 1;
                res[0] = j,
                res[1] = i + 1;
            }
            if (map[s[j]] === 0) len++;
            map[s[j]]++;
            j++;
        }

    }
    return s.slice(res[0], res[1]);
};