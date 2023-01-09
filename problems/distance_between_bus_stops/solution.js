/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (destination < start) {
        [start, destination] = [destination, start];
    }

    let total = 0,
    length = 0;
    for (let i = 0; i < distance.length; i++) {
        let n = distance[i];
        if (start <= i && i < destination) length += n;
        total += n;
    }
    return Math.min(length, total - length); // Because there are only two paths. 
};