/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let lostRecord = {};
    for (let [w, l] of matches) {
        if (!lostRecord[w]) lostRecord[w] = [];
        if (!lostRecord[l]) lostRecord[l] = [];
        lostRecord[l].push(w);
    }
    let champions = [];
    let runnerUps = [];

    for (let p of Object.keys(lostRecord)) {
        if (lostRecord[p].length === 0) champions.push(p);
        if (lostRecord[p].length === 1) runnerUps.push(p);
    }
    return [champions, runnerUps];
};