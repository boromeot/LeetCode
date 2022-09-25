/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = new Array(n);
    for (let i = 0; i < n; i++) {
        let t = i + 1;
        if (t % 3 === 0 && t % 5 === 0) {
            res[i] = 'FizzBuzz';
        } else if (t % 3 === 0) {
            res[i] = 'Fizz';
        } else if (t % 5 === 0) {
            res[i] = 'Buzz';
        } else {
            res[i] = String(t);
        }
    }
    return res;
};