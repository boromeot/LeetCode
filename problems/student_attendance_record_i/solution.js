/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0,
        late = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c !== 'L') late = 0;
        if (c === 'L') late++;
        if (c === 'A') absent++;
        if (absent >= 2) return false;
        if (late >= 3) return false;
    }
    return true;
};