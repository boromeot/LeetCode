/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const res = [];
    const map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']]
    ]);
    
    
    let combo = '';
    dfs(0);
    return res;
    
    function dfs(i) {
        if (i >= digits.length) {
            if (combo) {
                res.push(combo);
            }
            return;
        }
        for (let j = 0; j < map.get(digits[i]).length; j++) {
            combo += map.get(digits[i])[j];
            dfs(i + 1);
            combo = combo.slice(0, combo.length - 1);
        }
        
    }
    
    
};