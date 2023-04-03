/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let count = 0;
    while (target > 1) {
        if (maxDoubles <= 0) {
            return count + target - 1;
        }
        if (target % 2 === 0 && target / 2 >= 1) {
            target /= 2;
            maxDoubles--;
            count++;
        } else if (target > 1) {
            target--;
            count++;
        }
    }
    return count;
};