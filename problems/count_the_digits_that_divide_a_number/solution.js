/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let temp = num;
    let res = 0;
    while (temp > 0) {
        const digit = getLast(temp);
        if (num % digit === 0) res++;
        temp = removeLast(temp);
    }
    return res;
};


function getLast(n) {
    return n % 10;
}

function removeLast(n) {
    return Math.floor(n / 10);
}