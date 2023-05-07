/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    let res = 0;
    let l = 0, r = 1;
    let vowelCount = 1;

    while (r < word.length) {
        if (word[r - 1] < word[r]) {
            // found a new vowel
            vowelCount++;
        } else if (word[r - 1] > word[r]) {
            // reset
            vowelCount = 1;
            l = r;
        }
        if (vowelCount === 5) {
            res = Math.max(res, r - l + 1);
        }
        r++;
    }
    return res;
};