/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for (let n of arr) {
        if (isOdd(n)) {
            count++;
            if (count >= 3) return true;
        } else {
            count = 0;
        }
    }
    return false;
};

function isOdd(num) {
    return num % 2 === 1;
}