/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(' ');

    const sentence = new Array(words.length);

    for (let word of words) {
        sentence[word[word.length - 1] - 1] = word.slice(0, word.length - 1);
    }

    return sentence.join(' ');
};