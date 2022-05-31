/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const partition = [];
    
    dfs(0);
    return res;
    
    function dfs(i) {
        if (i >= s.length) {
            res.push(partition.slice());
            return;
        }
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                partition.push(s.slice(i, j + 1));
                dfs(j + 1);
                partition.pop();
            }
        }
        
    }
    
    function isPalindrome(s, l, r) {        
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    
};