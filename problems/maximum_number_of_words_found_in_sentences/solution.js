/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxSpace = 0;

    for (let sentence of sentences) {
        let spaces = 0;
        
        for (let c of sentence) {
            if (c === ' ') spaces++;
            maxSpace = Math.max(maxSpace, spaces);
        }
    }
    return maxSpace + 1;
};