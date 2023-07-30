/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    }

    const res = [];
    const combo = [];

    bt(0);
    return res;

    function bt(i) {
        if (i === digits.length) {
            res.push(combo.join(''));
            return;
        }

        for (let j = 0; j < map[digits[i]].length; j++) {
            combo.push(map[digits[i]][j]);
            bt(i + 1);
            combo.pop();
        }
        return;
    }
};