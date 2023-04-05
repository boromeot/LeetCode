/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let string = '';
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[j]) {
            string += ' ';
            j++;
        } 
        string += s[i];
    }
    return string;
};