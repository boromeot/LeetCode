/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (x + y < z) return false;
    if (x === z || y === z || x + y === z) return true;

    return z % GCD(x, y) === 0;
};

function GCD(a, b) {
    while(b != 0 ){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}
// 3, 0 
// 0, 3
// 3, 3
// 1, 5
// 1, 0
// 0, 1
// 3, 1
// 0, 4
//
