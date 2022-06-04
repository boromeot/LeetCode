/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map = {};
    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] ? map[s1[i]]++ : map[s1[i]] = 1;
    }
    
    let l = 0,
        r = 0;
    
    // This number will only decrement when r encounters a valid char
    // this number will only increment when l leave a valid char
    // if this number is zero then the sliding window contains all the valid char needed
    let reqLen = s1.length;
    
    while (r < s2.length) {
        if (map[s2[r]] > 0) reqLen--;
        map[s2[r]]--;
        r++;
        if (reqLen === 0) return true;
        
        // If this is true then the sliding window is too big and must be shortend from the left
        if (r - l === s1.length) {
            if (map[s2[l]] >= 0) reqLen++;
            map[s2[l]]++;
            l++;
        }
    }
    return false;
    
};