/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    const part = [];

    bt(0);
    return res;

    function bt(i) {
        if (part.length === 4 && i === s.length) {
            res.push(part.join('.'));
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (good(s.slice(i, j + 1))) {
                part.push(s.slice(i, j + 1));
                bt(j + 1);
                part.pop();
            }
        }
    }

    function good(str) {
        if (str[0] === '0' && str.length > 1) return false;
        if (+str < 0 || +str > 255) return false;
        return true;
    }

};