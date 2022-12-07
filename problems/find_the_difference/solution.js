/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // count letters in s
    let count = {};
    for (let c of s) {
        count[c] ? count[c]++ : count[c] = 1;
    }

    // subtract 1 for each occurnce of c in t
    for (let c of t) {
        if (count[c]) {
            count[c]--;
        } else {
            return c;
        }
    }
};