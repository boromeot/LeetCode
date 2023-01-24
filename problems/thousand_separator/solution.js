/**
 * @param {number} n
 * @return {string}
 */
const numberToString = {
    0 : '0',
    1 : '1',
    2 : '2',
    3 : '3',
    4 : '4',
    5 : '5',
    6 : '6',
    7 : '7',
    8 : '8',
    9 : '9'
};

var thousandSeparator = function(n) {
    if (n === 0) return '0';
    let arr = [];
    let len = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        if (len % 3 === 0 && len !== 0) arr.push('.');
        arr.push(numberToString[digit]);
        len++;
    }
    return arr.reverse().join('');
};