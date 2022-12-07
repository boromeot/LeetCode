/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) { // O(n), O(n)
    // count frequency of letters in s

    let count = {};

    for (let c of s) {
        count[c] ? count[c]++ : count[c] =  1;
    }

    // add up all even numbers + Maximum odd number or zero
    let res = 0;
    let isOdd = 0;
    for (let k of Object.keys(count)) {
        const num = count[k];
        // if even add to sum
        if (num % 2 === 0) {
            res += num;
        }
        else {
            isOdd = 1;
            res += num - 1;
        }
    }
    return res + isOdd;
};