/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let maxLength = -1;
    
    const obj = {};
    
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] !== undefined) {
            maxLength = Math.max(maxLength, i - obj[s[i]] - 1);
        } else {
            obj[s[i]] = i;
        }
    }
    return maxLength;
};