/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const rtn = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    
    let sum = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        let c = s[i];
        let prev;
        if (s[i + 1]) {
            prev = s[i + 1];
        }
        if (rtn[prev] > rtn[c]) {
            sum -= rtn[c];
        } else {
            sum += rtn[c];        
        }
    }
    return sum;
};