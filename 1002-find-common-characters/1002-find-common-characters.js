/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const res = [];
    
    let minFreq = new Array(26).fill(Infinity);
    
    for (let word of words) {
        let charFreq = new Array(26).fill(0);
        
        for (let c of word) {
            charFreq[c.charCodeAt(0) - 97]++;
        }
        
        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], charFreq[i]);
        }        
    }
    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0) {
            res.push(String.fromCharCode(i + 97));
            minFreq[i]--;
        }
    }
    return res;
    
};