/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = new Array();
    
    if (n % 2 === 1) {
        res.push(0);
    }
    
    for (let i = 1; i <= n/2; i++) {
        res.push(i, -i);
    }
    return res;
};