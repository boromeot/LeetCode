/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = getWordsRemoveSpaces(s);
    let l = 0, r = words.length - 1;
    while (l <= r) {
        [words[l], words[r]] = [words[r], words[l]];
        l++, r--;
    }
    return words.join(' ');
};

function getWordsRemoveSpaces(string) {
    const words = [];
    let stack = [];
    
    for (let c of string) {
        if (c !== ' ') {
            stack.push(c);
        } else if (stack.length > 0) {
            words.push(stack.join(''));
            stack = [];
        }
    }
    if (stack.length > 0) {
        words.push(stack.join(''));
    }
    
    return words;
}