/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const VOWELS = new Set(['a','e','i','o','u', 'A','E','I','O','U']);
    let l = 0,
        r = s.length - 1;
    let arr = new Array(s.length);
    
    while (l <= r) {
        if (VOWELS.has(s[l]) && VOWELS.has(s[r])) {
            arr[l] = s[r];
            arr[r] = s[l];
            l++, r--;
            continue;
        }
        if (!VOWELS.has(s[l])) {
            arr[l] = s[l];
            l++;
        }
        if (!VOWELS.has(s[r])) {
            arr[r] = s[r];
            r--;
        }
    }
    return arr.join('');
}