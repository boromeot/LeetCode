/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let arr = [];
    let temp = num;
    
    while (temp > 0) {
        arr.push(temp % 10);
        temp = Math.trunc(temp / 10);
    }
    let res = 0;
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] === 6) {
            res += 9 * Math.pow(10, i);
            i--
            while (i >= 0) {
                res += arr[i] * Math.pow(10, i);
                i--;
            }
            return res;
        }
        res += arr[i] * Math.pow(10, i);
    }
    return res;
};