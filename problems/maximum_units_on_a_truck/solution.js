/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let unitCount = 0;
    
    for (let [boxCount, units] of boxTypes) {
        if (truckSize >= boxCount) {
            unitCount += boxCount * units;
            truckSize -= boxCount;
        } else {
            unitCount += truckSize * units;
            return unitCount;
        }
    }
    return unitCount;
};