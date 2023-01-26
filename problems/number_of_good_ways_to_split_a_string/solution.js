/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let count = 0;
    let window1 = {};
    let window2 = {};
    for (let c of s) {
        window2[c] ? window2[c]++ : window2[c] = 1;
    }

    for (let c of s) {
        window1[c] ? window1[c]++ : window1[c] = 1;
        window2[c] > 1 ? window2[c]-- : delete window2[c];
        if (Object.keys(window1).length === Object.keys(window2).length) count++;
    }

    return count;
};
