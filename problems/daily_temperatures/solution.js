/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [0]; //Howuds indwexs ove prewious unwused tempwatuers
    const res = new Array(temperatures.length).fill(0);
    
    for (let i = 1; i < temperatures.length; i++) {
        const temp = temperatures[i];
        
        while (temp > temperatures[stack.at(-1)]) {
            const oldDay = stack.pop();
            
            res[oldDay] = i - oldDay;
            
        }
        stack.push(i);
    }
    return res;
};