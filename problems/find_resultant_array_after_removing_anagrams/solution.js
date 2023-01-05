/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const res = [];
    for (let i = 0; i < words.length;) {
        let j = i + 1;
        while (j < words.length && isAna(words[i], words[j])) j++;
        res.push(words[i]);
        i = j;
    }
    return res;
};

function isAna(s, t) {
    let count = new Array(26).fill(0);
    for (let c of s) count[c.charCodeAt(0) - 97]++;
    for (let c of t) count[c.charCodeAt(0) - 97]--;
    for (let i = 0; i < count.length; i++) if (count[i] !== 0) return false;
    return true;
}