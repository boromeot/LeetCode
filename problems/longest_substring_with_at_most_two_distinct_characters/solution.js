/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) { // Time O(n)
    let l = 0,
        r = 0;
    
    let max = 0;
    const map = {};
    let distinct = 0;
    while (r < s.length) {
        map[s[r]] === undefined ? map[s[r]] = 1 : map[s[r]]++;
        distinct = Object.keys(map).length; //Max length = 3
        
        if (distinct > 2) {
            map[s[l]]--;
            if (map[s[l]] === 0) {
                delete map[s[l]];
            }
            l++;
        }
        max = Math.max(max, r - l + 1);
        r++;
    }
    return max;
};

/*
"abcabcabcabcabcabcabcabcabcabcabc"
 l
  r
distinct = 1
{a:1}
max = 1
if (distinct > 2) {
    if (s[l] is a distinct char) {
        distinct--;
    }
    l++;
}


Have a set with each 
*/   