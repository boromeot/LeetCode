/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let set = new Set();
    let res = 0;
    
    for (let j of jewels) {
        set.add(j);
    }
    
    for (let s of stones) {
        if (set.has(s)) {
            res++;
        }
    }
    return res;
};