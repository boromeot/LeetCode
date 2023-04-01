/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const N = dist.length;
    for (let i = 0; i < N; i++) {
        dist[i] = (dist[i] / speed[i]);
    }
    dist.sort((a, b) => a - b);

    for (let i = 0; i < N; i++) {
        if (i >= dist[i]) return i;
    }
    return N;
};