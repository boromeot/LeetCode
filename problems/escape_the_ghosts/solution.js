/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    const [tarX, tarY] = target;
    let dist = Math.abs(tarX) + Math.abs(tarY);

    for (let [x, y] of ghosts) {
        let gDist = Math.abs(tarX - x) + Math.abs(tarY - y);
        if (gDist <= dist) return false;
    }
    return true;
};