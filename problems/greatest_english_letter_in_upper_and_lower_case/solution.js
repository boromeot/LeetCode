/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const lower = new Array(26).fill(0);
    const upper = new Array(26).fill(0);

    for (let c of s) {
        const asciiVal = c.charCodeAt(0);
        if (asciiVal <= 90) {
            upper[asciiVal - 65]++;
        } else {
            lower[asciiVal - 97]++
        }
        console.log(lower)
        console.log(upper)
    }
    for (let i = lower.length - 1; i >= 0; i--) {
        if (lower[i] > 0 && upper[i] > 0) return String.fromCharCode(i + 65);
    }
    return '';
};