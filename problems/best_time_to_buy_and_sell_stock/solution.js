/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let l = 0;
    
    for (let r = 0; r < prices.length; r++) {
        if (prices[r] < prices[l]) {
            l = r;
        }
        profit = Math.max(profit, prices[r] - prices[l]);
        
    }
    
    return profit;
};