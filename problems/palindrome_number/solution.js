/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    const arr = [];

    while (x > 0) {
        arr.push(getLastDigit(x));
        x = removeLastDigit(x);
    }
    let l = 0,
        r = arr.length - 1;
    while (l < r) {
        if (arr[l] !== arr[r]) return false;
        l++, r--;
    }
    return true;
};

function getLastDigit(num) {
    return num % 10;
}

function removeLastDigit(num) {
    return Math.trunc(num / 10);
}