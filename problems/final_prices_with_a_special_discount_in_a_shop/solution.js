/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const res = new Array(prices.length);
    const stack = []; // Holds indexs of prices

    for (let i = 0; i < prices.length; i++) {
        if (stack.length === 0) {
            stack.push(i);
        } else {
            while (prices[i] <= prices[stack.at(-1)]) {
                const topIndex = stack.pop();
                res[topIndex] = prices[topIndex] - prices[i];
            }
            stack.push(i);
        }
    }

    while (stack.length) {
        const topIndex = stack.pop();
        res[topIndex] = prices[topIndex];
    }
    return res;
};

// [8,4,6,2,3]
// [4,2,2,0,0]

// [8,4,4,2,2]