/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let bCount = 0;
    let max = 0;
    for (let i = 0, j = 0; i < blocks.length; i++) {
        if (blocks[i] === 'B') bCount++;
        max = Math.max(max, bCount);
        if (i - j + 1 === k) {
            if (blocks[j] === 'B') bCount--;
            j++;
        }
    }
    return k - max;
};