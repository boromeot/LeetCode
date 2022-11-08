/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let res = 0;
    let choices = [];
    for (let i = 1; i <= n; i++) {
        choices.push(i);
    }
    bt(choices, 1)
    return res;
    function bt(choices, j) {
        if (choices.length === 0) {
            res++;
            return;
        }
        for (let i = 0; i < choices.length; i++) {
            let n = choices[i];
            if (n % j === 0 || j % n === 0) {
                bt([...choices.slice(0, i), ...choices.slice(i + 1)], j + 1);
            }
        }
        
    }
};