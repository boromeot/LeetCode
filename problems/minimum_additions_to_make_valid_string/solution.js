/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    let l = 0,
        r = 0;

    let valid = 'abc';

    let count = 0;

    while (l < word.length) {
        while (word[l] !== valid[r % 3]) {
            count++;
            r++;
        }
        r++;
        l++;
    }
    if (r % 3 === 0) return count;
    return count + 3 - (r % 3);
};