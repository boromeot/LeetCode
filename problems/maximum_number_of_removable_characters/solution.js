/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
    let l = 0,
        r = removable.length - 1;
    let res = 0;

    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);

        if (isSub(s, p, new Set(removable.slice(0, m + 1)))) {
            l = m + 1;
            res = Math.max(res, m + 1);
        } else {
            r = m - 1;
        }
    }
    return res;
};

function isSub(p, q, skip) { // is q sub of p, O(n)
    for (let i = 0, j = 0; i < p.length; i++) {
        if (skip.has(i)) continue;
        if (p[i] === q[j]) j++;
        if (j === q.length) return true;
    }
    return false;
}