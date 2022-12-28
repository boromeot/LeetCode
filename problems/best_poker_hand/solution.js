/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    if (hasFlush(suits)) return 'Flush';

    let count = {};
    let pair = false;

    for (let c of ranks) {
        count[c] ? count[c]++ : count[c] = 1;
        if (count[c] === 2) pair = true;
        if (count[c] === 3) return 'Three of a Kind';
    }
    if (pair) return 'Pair';
    return 'High Card';
};

function hasFlush(suits) {
    let suit = suits[0];
    for (let s of suits) {
        if (suit !== s) return false;
    }
    return true;
}

