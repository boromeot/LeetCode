/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

class ParkingSystem {
    constructor(big, medium, small) {
        this.map = new Map([
            [1, big],
            [2, medium],
            [3, small]
        ]);
    }
    
    addCar(carType) {
        if (this.map.get(carType)) {
            this.map.set(carType, this.map.get(carType) - 1);
            return true;
        }
        return false;
    }    
}