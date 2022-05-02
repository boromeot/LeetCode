/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = [];
    const stack = [];
    
    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]]);
    }
    cars.sort((a, b) => a[0] - b[0]);
    
    for (let j = cars.length - 1; j >= 0; j--) {
        let t = (target - cars[j][0]) / cars[j][1];
        stack.push(t);
        if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
            stack.pop();
        }
    }
    return stack.length;
};