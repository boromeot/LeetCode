/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map = {};
    let unique = 0;
    let res = 0;

    for (let i = 0, j = 0; i < fruits.length; i++) {
        if (map[fruits[i]] === undefined) unique++;
        map[fruits[i]] ? map[fruits[i]]++ : map[fruits[i]] = 1;
        
        while (unique > 2) {
            map[fruits[j]]--;
            if (map[fruits[j]] === 0) {
                delete map[fruits[j]];
                unique--;
            }
            j++;
        }
        res = Math.max(res, i - j + 1);
    }
    return res;
};