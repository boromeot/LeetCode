/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        let digitArray = getEveryDigit(num);
        num = digitArray.reduce((prev, curr) => prev + curr);
    }
    return num;
};

function getLastDigit(num) {
    return num % 10;
}

function removeLastDigit(num) {
    return Math.trunc(num / 10);
}

function getEveryDigit(num) {
    const digitArray = [];
    while (num > 0) {
        digitArray.push(getLastDigit(num));
        num = removeLastDigit(num);
    }
    return digitArray;
}