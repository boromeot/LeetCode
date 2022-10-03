/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) { // Time O(n + m), Mem O(m)
    const count = {};
        
    for (let c of magazine) {
        count[c] ? count[c]++ : count[c] = 1;
    }
    
    for (let c of ransomNote) {
        if (!count[c]) {
            return false;
        }
        count[c]--;
    }
    
    return true;
};