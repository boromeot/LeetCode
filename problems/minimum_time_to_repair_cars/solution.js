/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let left = 0,
        right = Math.max(...ranks) * cars * cars;
    
    while (left < right) {
        let mid = Math.trunc((left + right) / 2);

        if (good(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
    function good(mid) {
        let finished = 0;
        for (let i = 0; i < ranks.length; i++) {
            const rank = ranks[i];
            finished += carsFinished(rank, mid);
        }
        return finished >= cars;
    }
};

function carsFinished(r, m) {
    return Math.floor(Math.sqrt((m / r)));
}