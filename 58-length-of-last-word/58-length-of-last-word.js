/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let start = s.length - 1;
    
    while (s[start] === ' ') {
        start--;
    }
    
    let end = start;

    while (end > 0 && s[end - 1] !== ' ') {
        end--;
    } 
    return start - end + 1;    
};