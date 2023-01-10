/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let count = new Array(26).fill(0);
    for (let c of s) {
        count[c.charCodeAt(0) - 97]++;
        if (count[c.charCodeAt(0) - 97] > 1) return c;
    }
};