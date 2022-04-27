/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let c of str) {
            count[c.charCodeAt()-97]++;
        }
        let key = count.join('#');
        map[key] ? map[key].push(str) : map[key] = [str];
    }
    return Object.values(map);
};