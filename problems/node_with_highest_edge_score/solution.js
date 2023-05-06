/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
    let scores = {};
    for (let i = 0; i < edges.length; i++) {
        scores[i] = 0;
    }

    for (let i = 0; i < edges.length; i++) {
        scores[edges[i]] += i;
    }

    let maxEdge = 0,
        maxScore = 0;
    for (let edge of Object.keys(scores)) {
        const score = scores[edge];
        if (maxScore < score) {
            maxScore = score;
            maxEdge = edge;
        }
    }
    return maxEdge;
};