/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let wordIndex = 1;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            wordIndex++;
            continue;
        }
        if (sentence[i - 1] !== undefined && sentence[i - 1] !== ' ') continue;

        for (let j = 0; j < searchWord.length; j++) {
            if (sentence[i] === ' ') {
            wordIndex++;
            break;
        }
            // console.log(sentence[i], searchWord[j])
            if (sentence[i] !== searchWord[j]) break;
            if (j === searchWord.length - 1) return wordIndex;
            i++;
        }
    }
    return -1;
};