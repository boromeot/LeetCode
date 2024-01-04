/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (let word of strs) {
        let bucket = new Array(26).fill(0);
        for (let c of word) {
            bucket[c.charCodeAt(0) - 97]++;
        }
        const key = bucket.join('-');
        map[key] ? map[key].push(word) : map[key] = [word];
    }
    return Object.values(map);
};