/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = new Array(candies.length);
    let max = Math.max(...candies);

    for (let i in candies) {
        let n = candies[i];
        res[i] = n + extraCandies >= max;
    }
    return res;
};