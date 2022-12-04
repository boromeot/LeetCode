/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    items.sort((a, b) => b[1] - a[1]);
    const obj = {};
    
    for (let [id, score] of items) {
        // if id exist
        if (obj[id] === undefined) {
            obj[id] = [score]
        } else if (obj[id].length < 5) {
            obj[id].push(score);
        }
    }
    const res = [];
    for (let id of Object.keys(obj)) {
        const sum = obj[id].reduce((curr, prev) => curr + prev);
        res.push([id, Math.trunc(sum / 5)]);
    }    
    return res;
};