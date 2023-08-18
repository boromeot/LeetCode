/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let set = new Set();
    let res = new Set();

    for (let i = 0, j = 0; i < s.length; i++) {
        if (i - j + 1 === 10) {
            let substring = s.slice(j, i + 1);
            if (set.has(substring)) res.add(substring);
            set.add(substring);
            j++
        }
    }
    return Array.from(res);
};