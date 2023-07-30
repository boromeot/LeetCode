/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
    
    for (let i = 0; i < s.length - 1; i++) {
        const num = +s.slice(0, i + 1);
        if (bt(i + 1, num)) return true;
    }
    return false;
    
    function bt(i, prev) {
        if (i === s.length) return true;

        for (let j = i; j < s.length; j++) {
            const num = +s.slice(i, j + 1);
            if (num + 1 === prev && bt(j + 1, num)) return true;
        }
        return false;
    }
};