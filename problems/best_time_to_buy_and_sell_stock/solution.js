/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minVal = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minVal) {
            minVal = prices[i];
        } else if (prices[i] - minVal > maxProfit) {
            maxProfit = prices[i] - minVal;
        }
        
    }
    return maxProfit;
};

//[7,3,5,1,6,4]