/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    if (h === piles.length) {
        return Math.max(...piles);
    }
    
    let l = 1;    
    let r = Math.max(...piles); // O(n) # n being length of piles
    
    let res = r;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let t = 0;
        for (let i = 0; i < piles.length; i++) {
            t += Math.ceil(piles[i] / m);
        }
        if (t <= h) {
            r = m - 1;
            res = Math.min(res, m);
        } else if (t > h) {
            l = m + 1;
        }
    }
    return res;
};