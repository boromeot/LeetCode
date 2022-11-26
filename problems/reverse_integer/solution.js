/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = 1;
    if (x < 0) {
        sign = -1;
        x *= -1;
    }
    
    let arr = [];
    
    while(x > 0) {
        arr.push(x % 10);
        x = Math.trunc(x / 10);
    }
    
    let res = 0;
    
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] * Math.pow(10, arr.length - i - 1);
    }
    res *= sign;
    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) return 0;
    return res;
};