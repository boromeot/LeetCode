/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const tokens = s.split(' ');
    let num = -1;
    for (let c of tokens) {
        if (!isNaN(c)) {
            if (Number(c) <= num) return false;
            num = Number(c);
        } 
}
    return true;
};