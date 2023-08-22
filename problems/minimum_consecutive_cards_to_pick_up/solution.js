/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let res = Infinity;

    let map = {};

    for (let i = 0, j = 0; i < cards.length; i++) {
        if (map[cards[i]] !== undefined) {
            res = Math.min(res, i - map[cards[i]] + 1);
        }
        map[cards[i]] = i;
    }

    if (res === Infinity) return -1;
    return res;
};