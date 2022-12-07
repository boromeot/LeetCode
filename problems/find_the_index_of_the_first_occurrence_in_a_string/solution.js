/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // two pointer approach
    // L points at haystack, R points at needle
    // L iterates through haystuck until it finds the start of needle
    // L and R then iterate through their strings comparing each letter
    // if R reaches the end of needle then return the start of L 
    // if L reaches the end before R then return -1

    let L = 0, R = 0;

    while (L < haystack.length) {
        if (haystack[L] === needle[R]) {
            let startIndex = L;
            while (haystack[L] === needle[R]) {
                if (R === needle.length-1) return startIndex;
                L++, R++;
            }
            //Didnt find the needle so reset
            L = startIndex;
            R = 0;
        }
        L++;
    }
    return -1;
};