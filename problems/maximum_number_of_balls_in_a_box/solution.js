/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const count = {};
    let max = 0;
    for (let i = lowLimit; i <= highLimit; i++) {
        const sum = getDigitSum(i);
        count[sum] ? count[sum]++ : count[sum] = 1;
        max = Math.max(max, count[sum]);
    }
    return max;
};

function getDigitSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += getLastDigit(n);
        n = removeLastDigit(n);
    }
    return sum;
}

function getLastDigit(n) {
    return n % 10;
}

function removeLastDigit(n) {
    return Math.floor(n / 10);
}