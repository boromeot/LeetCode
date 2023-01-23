/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = [];
    for (let op of operations) {
        if (op === '+') {
            arr.push(arr.at(-1) + arr.at(-2));
        } else if (op === 'D') {
            arr.push(arr.at(-1) * 2);
        } else if (op === 'C') {
            arr.pop();
        } else {
            arr.push(+op);
        }
    }
    return arr.reduce((a, b) => {
        return a + b;
    }, 0);
};  