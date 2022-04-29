/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let count = new Array(26).fill(0);
        for (let c of str) {
            count[c.charCodeAt()-97]++;
        }
        let key = count.join('-');
        map[key] ? map[key].push(str) : map[key] = [str];
    }
    
    return Object.values(map);
};