/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const res = [];
    for (let num of nums) {
        res.push(...getDigits(num));
    }
    return res;
};

function getDigits(num) {
    const digits = [];
    while (num > 0) {
        digits.push(getLast(num));
        num = removeLast(num);
    }
    return digits.reverse();
}

function getLast(num) {
    return num % 10;
}

function removeLast(num) {
    return Math.floor(num / 10);
}