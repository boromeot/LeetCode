/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let l = 0,
        r = Math.max(...candies);
    let m;

    while (l < r) {
        m = Math.floor((l + r + 1) / 2);
        let sum = 0;
        for (let i = 0; i < candies.length; i++) {
            sum += Math.floor(candies[i] / m);
        }
        if (sum >= k) {
            l = m;
        } else {
            r = m - 1;
        }
    }
    return l;
};