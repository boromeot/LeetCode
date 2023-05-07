/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let prefix = 0;
    let prefixArr = new Array(shifts.length);
    for (let i = shifts.length - 1; i >= 0; i--) {
        prefix += shifts[i];
        prefixArr[i] = prefix;
    }
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const shift = prefixArr[i] % 26;
        let charCode = s.charCodeAt(i) + shift;
        if (charCode >= 123) {
            charCode = (charCode % 123) + 97;
        }
        res += String.fromCharCode(charCode);
    }
    return res;
};