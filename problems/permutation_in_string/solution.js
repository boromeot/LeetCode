/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map = {};
    
    for (let c of s1) {
        map[c] ? map[c]++ : map[c] = 1;
    }
    
    let l = 0,
        r = 0;
    
    while (r < s2.length) {
        
        while (!map[s2[r]] && l <= r) {
            map[s2[l]]++;
            l++;
        }
        
        map[s2[r]]--;
        if (r - l + 1 === s1.length) return true;       
        r++;
        
    }
    return false;
};

// "eidboab"
//       l
//        r
// {a: 1, b: 1}