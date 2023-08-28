/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(coins) {
    let l = 0,
        r = coins;
    let res = 0;

    while (l <= r) {
        const stairCases = l + Math.floor((r - l) / 2);
        const coinsRequired = Gauss(stairCases);
        if (coins < coinsRequired) {
            r = stairCases - 1;
        } else {
            res = Math.max(res, stairCases);
            l = stairCases + 1;
        }
    }
    return res;
};

function Gauss(n) {
    return (n * (n + 1)) / 2;
}