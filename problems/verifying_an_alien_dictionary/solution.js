/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = {};
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i + 1;
    }

    for (let i = 0; i < words.length - 1; i++) {
        let prev = words[i],
            next = words[i + 1];
        for (let j = 0; j < prev.length; j++) {
            let p = map[prev[j]] || -1,
                n = map[next[j]] || -1;
            if (p < n) {
                break;
            } else if (p > n) {
                return false;
            }
        }
    }
    return true;
};