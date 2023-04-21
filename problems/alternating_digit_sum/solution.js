/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let nums = [];
    while (n > 0) {
        nums.push(getLast(n));
        n = removeLast(n);
    }
    nums = nums.reverse();
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2) {
            sum -= nums[i];
        } else {
            sum += nums[i];
        }
    }
    return sum;
};

function getLast(n) {
    return n % 10;
}

function removeLast(n) {
    return Math.trunc(n / 10);
}