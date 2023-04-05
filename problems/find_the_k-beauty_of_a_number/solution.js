/**
 * @param {number} num
 * @param {number} k
 * @return {number}+
 */
var divisorSubstrings = function(num, k) {
    const sNum = String(num);
    let count = 0;
    let i = 0;
    for (let j = k; j <= sNum.length; j++, i++) {
        let dividend = Number(sNum.slice(i, j));
        if (num % dividend === 0) count++;
    }
    return count;
};