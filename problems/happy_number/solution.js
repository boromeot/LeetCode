/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) return true;
    let slow = n,
        fast = makeNum(n);
    
    while (true) {
        if (slow === fast) return false;
        if (fast === 1) return true;
        fast = makeNum(makeNum(fast));
        slow = makeNum(slow);
    } 
};

function makeNum(n) {
    let sum = 0;
    
    while (n > 0) {
        sum += Math.pow((n % 10), 2);
        n = Math.trunc(n / 10);
    }
    return sum;
}