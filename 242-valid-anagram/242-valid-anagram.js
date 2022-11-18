/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {// time O(n), space O(n)
    let count1 = {};
    let count2 = {};
    
    
    for (let c of s) {
        if (count1[c]) count1[c]++;
        else count1[c] = 1;
    }
    
    for (let c of t) {
        if (count2[c]) count2[c]++;
        else count2[c] = 1;
    }
    
    for (let k of Object.keys(count1)) {
        if (count1[k] !== count2[k]) return false;
    }
    
    for (let k of Object.keys(count2)) {
        if (count2[k] !== count1[k]) return false;
    }
    return true;
};