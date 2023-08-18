/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let len = s1.length;
    let map = {};
    for (let i = 0; i < len; i++) {
        map[s1[i]] ? map[s1[i]]++ : map[s1[i]] = 1;
    }

    for (let i = 0, j = 0; i < s2.length; i++) {
        
        if (map[s2[i]] > 0) len--;
        map[s2[i]]--;

        while (i - j + 1 === s1.length) {
            if (len === 0) return true;
            if (map[s2[j]] >= 0) len++;
            map[s2[j]]++;
            j++;
        }
    }
    return false;
};