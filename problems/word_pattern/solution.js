/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    const map = {};
    if (pattern.length !== words.length) return false;
    if (new Set(words).size !== new Set(pattern).size) return false;

    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        if (map[c] &&  map[c] !== words[i]) return false;
        else map[c] = words[i];
    }
    return true;
};