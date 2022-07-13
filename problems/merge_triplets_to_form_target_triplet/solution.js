/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let filteredTriplets = [];
    //Traverse each arr
    for (let i = 0; i < triplets.length; i++) {
        let flag = true;
        //Compare each element with the respective element in target
        for (let j = 0; j < triplets[0].length; j++) {
            if (triplets[i][j] > target[j]) {
                flag = false;
                break;
            }
        }
        if (flag) filteredTriplets.push(triplets[i]);
    }
    
    if (!filteredTriplets.length) return false;
    
    let found = 0;
    for (let j = 0; j < filteredTriplets[0].length; j++) {
        for (let i = 0; i < filteredTriplets.length; i++) {
            if (target[j] === filteredTriplets[i][j]) {
                found++;
                break;
            }
        }
    }
    return found === 3;
};