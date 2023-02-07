/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let l = 0,
        r = 0;

    let max = 0;
    let count = 0;
    while (r < forts.length) {
        if (forts[r] !== 0) {
            if (forts[l] === 1 && forts[r] === -1 || forts[l] === -1 && forts[r] === 1) max = Math.max(max, count);
            count = 0;
            l = r;
        }
        if (forts[r] === 0) count++;
        r++;
    }
    return max;
}; 