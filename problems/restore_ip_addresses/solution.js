/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) return [];
    
    const res = [];
    bt(0, 0, '');
    return res;
    
    function bt(dots, i, curIp) {
        if (dots === 4 && i === s.length) {
            res.push(curIp.slice(0, curIp.length - 1));
            return;
        }
        if (dots > 4) return; 
        
        for (let j = i; j < Math.min(j + 3, s.length); j++) {
            if (+s.slice(i, j+1) <= 255 && (i === j || s[i] !== '0')) {
                bt(dots + 1, j + 1, curIp + s.slice(i, j+1) + '.');
            }
        }
    }
    
};