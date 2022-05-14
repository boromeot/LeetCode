/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1,
        r = Math.max(...piles);
    let res = r;
    while (l <= r) {
        let m = Math.trunc((l + r) / 2);
        let t = 0;
        for (let i = 0; i < piles.length; i++) {
            t += Math.ceil(piles[i] / m);
        }
        if (t <= h) {
            res = Math.min(res, m);
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return res;
};