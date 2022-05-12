/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const count = new Array(26).fill(0);
        for (let j = 0; j < str.length; j++) {
            const c = str[j];
            count[c.charCodeAt() - 97]++;
        }
        const key = count.join('-');
        if (map[key]) {
            map[key].push(str);
        } else {
            map[key] = [str];
        }
    }
    return Object.values(map);
};