/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const stack = [];
    let max = -Infinity;
    
    let cars = []; // [position, velocity]
    for (let i = 0; i < position.length; i++) {
        cars[i] = [position[i], speed[i]];
    }
    
    cars.sort((a, b) => a[0] - b[0]); // Sort based on position
    
    for (let i = cars.length - 1; i >= 0; i--) {
        const [pos, vel] = cars[i];
        let t = (target - pos) / vel;
        if (t > max) {
            max = t;
            stack.push(t);
        }
    }
    
    
    return stack.length;
};