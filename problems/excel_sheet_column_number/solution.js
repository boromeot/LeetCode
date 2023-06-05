/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let sum = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const c = columnTitle[i];
        sum += val(c) * Math.pow(26, columnTitle.length - i - 1);
    }
    return sum;
};

function val(c) {
    return c.charCodeAt(0) - 64;
}