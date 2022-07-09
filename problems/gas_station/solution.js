/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let netGasInCircuit = 0;
    let netGasAtPump = [];
    
    for (let i = 0; i < gas.length; i++) {
        netGasInCircuit += (gas[i] - cost[i]);
        netGasAtPump.push(gas[i] - cost[i]);
    }
    if (netGasInCircuit < 0) return -1; //Means there is not enough gas to travel the distance
    
    let res = 0;
    let sum = 0;
    
    for (let i = 0; i < netGasAtPump.length; i++) {
        sum += netGasAtPump[i];
        
        if (sum < 0) {
            res = i + 1;
            sum = 0;
        }
    }
    return res;
};