/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = new Array(position.length); // [position, speed];

    for (let i = 0; i < position.length; i++) {
        cars[i] = [position[i], speed[i]]; 
    }    
    cars.sort((a, b) => a[0] - b[0]);

    let max = -Infinity;
    const stack = [];
    for (let i = cars.length - 1; i >= 0; i--) {
        const [pos, speed] = cars[i];
        const time = (target - pos) / speed;
        if (time > max) {
            stack.push(time);
            max = time;
        }
    }
    return stack.length;
};