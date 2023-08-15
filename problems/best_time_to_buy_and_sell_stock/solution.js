/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        res = Math.max(res, prices[i] - min);
    }
    return res;
};