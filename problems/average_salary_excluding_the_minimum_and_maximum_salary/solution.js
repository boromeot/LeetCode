/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Infinity,
        max = -Infinity;

    let sum = 0;

    for (let num of salary) {
        sum += num;
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    sum -= min, sum -= max;
    return (sum / (salary.length - 2)).toFixed(5);
};