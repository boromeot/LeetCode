/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = {};

    for (let i = 0; i < list1.length; i++) {
        const word = list1[i];
        map[word] = i;
    }

    let min = Infinity;
    let res = [];

    for (let i = 0; i < list2.length; i++) {
        const word = list2[i];
        if (map[word] !== undefined) {
            let indexSum = map[word] + i;
            if (indexSum < min) {
                res = [];
                min = indexSum;
                res.push(word);
            } else if (indexSum === min) {
                res.push(word);
            }
        }
    }
    return res;
};