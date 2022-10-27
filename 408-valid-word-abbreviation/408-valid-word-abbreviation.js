/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let nums = new Set(['1','2','3','4','5','6','7','8','9','0']);
    let j = 0;
    let i;
    for (i = 0; i < word.length; i++) {
        if (nums.has(abbr[j])) {
            if (abbr[j] === '0') return false;
            const start = j;
            while (nums.has(abbr[j])) {
                j++;
            }
            const count = +abbr.slice(start, j);
            for (let k = i; k < i + count; k++) {                
                if (word[k] === undefined) return false;
            }
            i += count - 1;
        } else if (word[i] !== abbr[j]) {
            console.log(word[i], abbr[j]);
            return false;
        } else {
            j++;
        }
    }
    return i === word.length && j === abbr.length;
};