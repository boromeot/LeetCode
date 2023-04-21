/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const mod = Math.pow(10, 9) + 7;

    let count = 0;

    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const prev = s[i - 1];
        const curr = s[i];
        if (prev === undefined || curr === prev) {
            sum++;
            count += sum;
        } else {
            sum = 1;
            count += sum;
        }
    }
    return count % mod;
};