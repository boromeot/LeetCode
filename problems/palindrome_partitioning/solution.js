/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const part  = [];

    bt(0);
    return res;

    function bt(i) {
       if (i === s.length) {
           res.push(part.slice());
           return;
       }

        for (let j = i; j < s.length; j++) {
            if (isPalin(i, j)) {
                part.push(s.slice(i, j + 1));
                bt(j + 1);
                part.pop();
            }
        }
    }

    function isPalin(i, j) {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++, j--;
        }
        return true;
    }
};