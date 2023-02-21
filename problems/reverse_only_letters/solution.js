/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const arr = s.split('');

    let l = 0,
        r = arr.length - 1;
    
    while (l < r) {
        if (isLetter(arr[l]) && isLetter(arr[r])) {
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }
        if (!isLetter(arr[l])) l++;
        if (!isLetter(arr[r])) r--;
    }
    return arr.join('');
};

function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}