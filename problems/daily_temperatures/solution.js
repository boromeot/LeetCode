/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [0];
    const res = new Array(temperatures.length).fill(0);
    for (let i = 1; i < temperatures.length; i++) {
        const temp = temperatures[i];
        while (temp > temperatures[stack.at(-1)]) {
            const tmp = stack.pop();
            res[tmp] = (i - tmp);
        }
        stack.push(i);
    }
    return res;
};
//   0  1  2
// [75,71,69,72,76,73]
// stack [75]
// is 71 > stack[-1] ? res.push(i - stack.pop()) : 