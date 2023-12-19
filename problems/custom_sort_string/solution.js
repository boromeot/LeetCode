/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const map = {};

    for (let i = 0; i < order.length; i++) {
        const c = order[i];
        map[c] = i;
    }
    let arr = s.split('');

    let res = arr.sort((a, b) => {
        const prioA = map[a] === undefined ? -1 : map[a];
        const prioB = map[b] === undefined ? -1 : map[b];
        return prioA - prioB;
    })
    return res.join('');
};