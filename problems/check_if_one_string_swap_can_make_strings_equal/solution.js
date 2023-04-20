/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let diff = 0;
    let i = 0,
        j = 0;
    
    let index1,
        index2;

    while (i < s1.length && j < s2.length) {
        if (s1[i] !== s2[j]) {
            diff++;
            index1 = index2,
            index2 = i;
        }
        i++, j++;
    }
    if (diff === 1 || diff > 2) return false;
    return (s1[index1] === s2[index1] || s1[index1] === s2[index2]) && (s1[index2] === s2[index1] || s1[index2] === s2[index2]);
};