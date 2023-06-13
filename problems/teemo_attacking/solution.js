/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0) return 0;
    let total = duration;
    for (let i = 1; i < timeSeries.length; i++) {
        total += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
    }
    return total;
};