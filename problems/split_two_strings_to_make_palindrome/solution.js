/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    return greed(a, b) || greed(b, a);
};

function greed(a, b) {
    let l = 0, r = a.length - 1;
    while (l < r && a[l] === b[r]) {
        l++, r--;
    }
    return isPalindrome(a, l, r) || isPalindrome(b, l ,r);
}

function isPalindrome(s, i, j) {
    while (i < j && s[i] === s[j]) {
        i++, j--;
    }
    return i >= j;
}