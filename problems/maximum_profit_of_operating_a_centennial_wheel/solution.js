/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
    let waitList = 0,
        i = 0;
        profit = 0;
        maxProfit = 0,
        maxProfitIndex = -1;
    
    for (i = 0; i < customers.length; i++) {
        const customer = customers[i];
        waitList += customer;
        const peopleOnGondala = Math.min(4, waitList);
        waitList -= peopleOnGondala;
        
        profit += getProfit(peopleOnGondala);
        if (profit > maxProfit) {
            maxProfitIndex = i + 1;
            maxProfit = profit;
        }
    }

    while (waitList > 0) {
        const peopleOnGondala = Math.min(4, waitList);
        waitList -= peopleOnGondala;
        
        profit += getProfit(peopleOnGondala);
        if (profit > maxProfit) {
            maxProfitIndex = i + 1;
            maxProfit = profit;
        }
        i++;
    }
    return maxProfitIndex;

    function getProfit(people) {
        return (people * boardingCost) - runningCost;
    }
};
