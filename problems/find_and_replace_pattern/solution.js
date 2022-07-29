/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let res = [];
    
    for (let i = 0; i < words.length; i++) {
        let map = new Map();
        let set = new Set();
        
        let j;
        for (j = 0; j < pattern.length; j++) {
            // if (map.has(pattern[j]) && map.get(pattern[j]) !== words[i][j] || 
            //     set.has(words[i][j]) && map.get(pattern[j]) !== words[i][j]) break;
            
            
            if (map.get(pattern[j]) !== words[i][j] && (map.has(pattern[j]) || set.has(words[i][j]))) break;
            
            set.add(words[i][j]);
            map.set(pattern[j], words[i][j]);
        }
        if (j === pattern.length) {
            res.push(words[i]);
        }
    }
    return res;
};