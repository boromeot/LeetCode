/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let last;
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            last = i;
            if (number[i] < number[i + 1]) {
                return number.slice(0, i) + number.slice(i + 1);
            }
        }
    }
    return number.slice(0, last) + number.slice(last + 1);
};