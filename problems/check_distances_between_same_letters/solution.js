/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map[c] !== undefined) {
            const start = map[c];
            const end = i;

            const gap = end - start - 1;
            if (gap !== distance[c.charCodeAt(0) - 97]) return false;
        } else {
            map[c] = i;
        }
    }
    return true;
};