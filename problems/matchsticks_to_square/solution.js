/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    const sum = matchsticks.reduce((a,b) => a + b);
    if (sum % 4) return false;
    const target = sum / 4;
    const chosen = new Array(matchsticks.length).fill(false);

    return bt(0, 4, 0);

    function bt(i, k, s) {
        if (k === 0) return true;
        if (s === target) {
            return (bt(0, k - 1, 0));
        }

        for (let j = i; j < matchsticks.length; j++) {
            if (chosen[j] || s + matchsticks[j] > target) continue;
            chosen[j] = true;
            if (bt(j + 1, k, s + matchsticks[j])) return true;
            chosen[j] = false;
        }
        return false;
    }
};