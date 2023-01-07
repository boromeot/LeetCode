/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let sum = 0;

    let count = 0;
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === '1') count++;
        else sum += calc(count), count = 0;
    }
    return sum % (Math.pow(10, 9) + 7);
};

function calc(n) {
    return (Math.pow(n, 2) + n) / 2
}

// (n^2 + n) / 2
// ((n * (n + 1)) / 2)