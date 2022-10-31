/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    
    while (true) {
        if (set.has(n)) return false;
        if (n === 1) return true;
        set.add(n);
        n = makeNum(n);
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