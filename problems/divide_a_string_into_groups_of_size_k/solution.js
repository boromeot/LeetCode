/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const res = [];
    let part = '';
    for (let i = 0; i < s.length; i++) {
        part += s[i];
        if ((i + 1) % k === 0) {
            res.push(part);
            part = '';
        }
    }
    if (part.length > 0) {
        while (part.length < k) part += fill;
        res.push(part);
    }
    return res;
};