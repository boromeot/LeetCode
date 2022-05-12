/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};

//[7,3,5,1,6,4]