/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const res = [];
    const map = {};
    
    for (let i = 0; i < strs.length; i++) {
        const count = new Array(26).fill(0);
        const s = strs[i];
        
        for (let j = 0; j < s.length; j++) {
            const c = s[j];
            count[c.charCodeAt() - 97]++;
        }
        
        const key = count.join(':)');
        
        if (map[key]) {
            map[key].push(s);
        } else {
            map[key] = [s];
        }
    }
    
    return Object.values(map);
    
};