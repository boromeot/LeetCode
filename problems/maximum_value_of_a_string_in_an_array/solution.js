/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0;

    for (let word of strs) {
        if (onlyDigits(word)) {
            max = Math.max(max, Number(word));
        } else {
            max = Math.max(max, word.length);
        }
    }
    return max;
};

function onlyDigits(string) {
    // const set = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
    const set = new Set(['1','2','3','4','5','6','7','8','9','0']);

    for (let c of string) {
        if (!set.has(c)) return false;
    }
    return true;;
}