/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let sFold = s.slice(1) + s.slice(0, s.length - 1);

    return sFold.includes(s);
};