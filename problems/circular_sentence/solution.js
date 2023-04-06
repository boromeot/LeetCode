/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const N = sentence.length;
    if (sentence[0] !== sentence[N - 1]) return false;
    
    for (let i = 0; i < N; i++) {
        if (sentence[i] === ' ' && (sentence[i - 1] !== sentence[i + 1])) return false;
    }
    return true;
};