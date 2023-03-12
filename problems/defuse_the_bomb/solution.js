/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if (k === 0) return new Array(code.length).fill(0);
    
    if (k > 0) {
        return decode(code, k);
    }
    if (k < 0) {
        return decode(code.reverse(), -k).reverse();
    }
};

function decode(code, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += code[i];
    }
    const res = [];
    for (let i = 0; i < code.length; i++) {
        sum -= code[i];
        sum += code[(i + k) % code.length];
        res.push(sum);
    }
    return res;
}