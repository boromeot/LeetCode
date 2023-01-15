/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const DIGITS = new Set(['0','1','2','3','4','5','6','7','8','9']);

    let digs = [],
    letters = [];

    for (let c of s) {
        if (DIGITS.has(c)) digs.push(c);
        else letters.push(c);
    }

    if (Math.abs(digs.length - letters.length) > 1) return '';
    let result = '';

    if (digs.length > letters.length) {
        for (let i = 0; i < digs.length; i++) {
            result += (digs[i]);
            result += (letters[i] || '');
        }
    } else {
        for (let i = 0; i < letters.length; i++) {
            result += (letters[i]);
            result += (digs[i] || '');
        }
    }
    return result;
};