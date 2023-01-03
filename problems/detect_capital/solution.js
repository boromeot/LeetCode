/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capitalCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) capitalCount++;

        if (word[0] === word[0].toUpperCase()) {
            if (capitalCount !== i + 1 && capitalCount !== 1) {
                return false;
            }
        } else {
            if (capitalCount !== 0) return false;
        }
    }
    return true;
};