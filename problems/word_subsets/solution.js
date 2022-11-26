/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const maxFreq = {};
    for (let word of words2) {
        const freq = getFreq(word);
        for (const k of Object.keys(freq)) {
            maxFreq[k] = Math.max(maxFreq[k] || 0, freq[k]);
        }
    }
    
    const res = [];
    for (let word of words1) {
        const freq = getFreq(word);
        let universal = true;
        for (const k of Object.keys(maxFreq)) {
            if (maxFreq[k] > (freq[k] || 0)) {
                universal = false;
                break;
            }
        }
        if (universal) res.push(word);
    }
    return res;
};

function getFreq(word) {
    const obj = {};
    for (let c of word) {
        obj[c] ? obj[c]++ : obj[c] = 1;
    }
    return obj;
}