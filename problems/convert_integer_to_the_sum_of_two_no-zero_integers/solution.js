/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let i = 1; i < n; i++) {
        const a = i;
        const b = n - i;
        if (!hasZero(a) && !hasZero(b)) {
            return [a, b];
        }
    }
};

// 10, 100, 1000, 1000
// 10, 110, 1110, 11110,
// 10, 101, 1001, 10001

function hasZero(num) {
    let temp = num;
    while (temp > 0) {
        if (getLast(temp) === 0) {
            return true;
        }
        temp = removeLast(temp);
    }
    return false;
}

function removeLast(num) {
    return Math.trunc(num / 10);
}

function getLast(num) {
    return num % 10;
}