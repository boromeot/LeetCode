/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    const stack = [];
    const res = new Array(temps.length).fill(0);

    for (let i = 0; i < temps.length; i++) {
        const temp = temps[i];

        while (temp > temps[stack.at(-1)]) {
            const oldDay = stack.pop();

            res[oldDay] = i - oldDay;
        }
        stack.push(i);
    }
    return res;
};