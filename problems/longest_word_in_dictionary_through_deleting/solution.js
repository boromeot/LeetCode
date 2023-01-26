/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    let subs = [];
    for (let word of dictionary) {
        if (isSubsequence(s, word)) subs.push(word);
    }
    subs.sort((a, b) => {
        if (a.length === b.length) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
        return b.length - a.length;
    });
    return subs[0] || '';
};

function isSubsequence(string, sub) { // is sub a subseq of string
    if (string.length < sub.length) return false;
    let l = 0, r = 0;

    while (l < string.length) {
        if (string[l] === sub[r]) {
            r++;
        }
        if (r >= sub.length) return true;
        l++;
    }
    return false;
}