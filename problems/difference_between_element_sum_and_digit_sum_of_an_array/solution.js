/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0;
    let dSum = 0;

    for (let n of nums) {
        sum += n;
        dSum += digitSum(n);
    }
    return Math.abs(sum - dSum);
};

function digitSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += getLast(n);
        n = removeLast(n);
    }
    return sum;
}

function removeLast(n) {
    return Math.floor(n / 10);
}

function getLast(n) {
    return n % 10;
}