/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) { // Time O(2n) -> O(n), Memory O(26 + 2) -> O(1)
    let arr = new Array(26);
    for (let i = 0; i < s.length; i++) { 
        let index = s.charCodeAt(i) - 97;
        arr[index] ? arr[index]++ : arr[index] = 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (arr[s.charCodeAt(i) - 97] === 1) return i;
    }
    return -1;
}