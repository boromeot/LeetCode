/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const count = {};
    for (let word of words1) {
        count[word] = count[word] + 1 || 1;
    }

    for (let word of words2) {
        if (count[word] < 2) count[word]--;
    }
    let res = 0;
    for (let word of Object.keys(count)) {
        if (count[word] === 0) res++;
    }
    return res;
};