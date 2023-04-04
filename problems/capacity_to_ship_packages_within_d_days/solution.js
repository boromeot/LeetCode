/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = 0,
        right = 5 * Math.pow(10, 4) * 500;

    function good(num) {
        let current = num;
        let daysUsed = 1;
        for (let n of weights) {
            if (current < n) {
                current = num;
                daysUsed++;
            }
            current -= n;
            if (current < 0) {
                return false;
            }
        }
        return daysUsed <= days;
    }

    while (left < right) {
        let mid = Math.trunc((left + right) / 2);

        if (good(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};