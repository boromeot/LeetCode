/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = [];
    let l = a.length -1,
        r = b.length -1;
    let carry = 0;
    while (l >= 0 || r >= 0) {
        let sum = carry;

        if (a[l] === '1') sum++;
        if (b[r] === '1') sum++;

        if (sum > 1) carry = 1;
        else carry = 0;

        res.push(sum % 2);
        l--, r--;
    }
    if (carry === 1) res.push(1);
    return res.reverse().join('');
};