/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let len = high - low + 1;
    
    if (len % 2 === 0) {
        return len / 2;
    } else {
        if (low % 2 === 1 && high % 2 === 1) {
            return Math.ceil(len / 2);
        } else {
            return Math.floor(len / 2);
        }
    }
    
};