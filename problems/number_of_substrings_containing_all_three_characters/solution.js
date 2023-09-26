/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const n = s.length;
    const map = new Map();
    let res = 0;

    for (let i = 0, j = 0; i < n; i++) {
        const c = s[i];
        if (map.get(c) !== undefined) map.set(c, map.get(c) + 1);
        else map.set(c, 1);

        while (map.size >= 3) {
            res += n - i;
            map.set(s[j], map.get(s[j]) - 1);
            if (map.get(s[j]) === 0) map.delete(s[j]);
            j++;
        }
    }
    return res;
};