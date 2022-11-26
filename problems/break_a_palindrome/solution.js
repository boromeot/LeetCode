/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length <= 1) return '';
    const arr = palindrome.split('');
    
    for (let i = 0; i < Math.trunc(arr.length / 2); i++) {
        const c = arr[i];
        if (c !== 'a') {
            arr[i] = 'a';
            return arr.join('');
        }
    }
    arr[arr.length - 1] = 'b';
    return arr.join('');
};