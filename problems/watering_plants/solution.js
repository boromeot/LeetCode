/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    const N = plants.length;
    
    let water = capacity;
    let steps = 0;

    for (let i = 0; i < plants.length; i++) {
        if (water >= plants[i]) {
            steps++;
        } else {
            steps += (i + 1) * 2 - 1
            water = capacity;
        }
        water -= plants[i];
    }
    return steps;
};