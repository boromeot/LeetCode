/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let left = [],
        right = new Array(ratings.length);

    let prevRating = -Infinity;
    let prevCandy = 0;
    for (let i = 0; i < ratings.length; i++) {
        let n = ratings[i];
        if (n > prevRating) {
            left.push(prevCandy + 1);
            prevCandy++;
        } else {
            left.push(1);
            prevCandy = 1;
        }
        prevRating = n;
    }

    prevRating = -Infinity;
    prevCandy = 0;
    for (let i = ratings.length - 1; i >= 0; i--) {
        let n = ratings[i];
        if (n > prevRating) {
            right[i] = prevCandy + 1;
            prevCandy++;
        } else {
            right[i] = 1;
            prevCandy = 1;
        }
        prevRating = n;
    }
    let sum = 0;
    for (let i = 0; i < left.length; i++) {
        sum += Math.max(left[i], right[i]);
    }
    return sum;
};