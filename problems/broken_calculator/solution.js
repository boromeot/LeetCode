/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
    let count = 0;
    while (target > startValue) {
        if (target % 2 === 1) target += 1;
        else target /= 2;
        count++;
    }
    while (target < startValue) {
        target += 1;
        count++;
    }
    return count;
};