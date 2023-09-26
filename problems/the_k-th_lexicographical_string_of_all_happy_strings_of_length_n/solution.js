/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const choices = ['a','b','c'];
    const arr = [];
    let sub = [];
    bt(-1);
    return arr[k - 1] ? arr[k - 1] : '';
    function bt(prev) {
        if (sub.length === n) {
            arr.push(sub.join(''));
            return;
        }

        for (let i = 0; i < choices.length; i++) {
            if (i === prev) continue;
            sub.push(choices[i]);
            bt(i);
            sub.pop();
        }
    }
};