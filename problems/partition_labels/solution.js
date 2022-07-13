/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let last = new Map();
    let res = [];
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        last.set(c, i);
    }

    
    let start = 0,
        l = 0,
        r = last.get(s[start]);
    while (r < s.length) {
        if (l === r) {
            res.push(r - start + 1);
            start = l + 1;
            r = last.get(s[start]);
        }
        if (last.get(s[l]) > r) {
            r = last.get(s[l]);
        }
        l++;
    }
    return res;
};