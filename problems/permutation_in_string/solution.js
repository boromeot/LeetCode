/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
	const map = {};
    
    //Count occurences of letters in s1
    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = (map[s1[i]] || 0) + 1;
    }

    //Set up pointers
    let l = 0,
        r = 0;
    
    //If reqLen === 0 return true;
    let reqLen = s1.length;
    
    //iterate the pointers till r reaches end of s2
    while (r < s2.length) {
        if (map[s2[r]] > 0) reqLen--;
        
        map[s2[r]]--;
        r++;
        
        if (reqLen === 0) return true;
        
        if (r - l === s1.length) {
            if (map[s2[l]] >= 0) reqLen++;
            map[s2[l]]++;
            l++;
        }
        
    }
    return false;
    
    
};