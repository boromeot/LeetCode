/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if (n === 2) return [1,-1];
    let runningSum = 0;
    let res = new Array(n);
    
    for (let i = 0; i < n - 1; i++) {
        runningSum += i;
        res[i] = i;
    }
    
    res[n-1] = runningSum - (2*runningSum);
    return res;
};