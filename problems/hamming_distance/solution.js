/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let binX = toBin(x),
        binY = toBin(y);
    let res = 0;

    let longest = binX.length > binY.length ? binX : binY;
    let shortest = binX.length <= binY.length ? binX : binY;

    let l = longest.length - 1,
        r = shortest.length - 1;
    
    while (l >= 0) {
        if (longest[l] !== (shortest[r] || 0)) res++;
        l--, r--;
    }
    return res;
};

function toBin(num) {
    const arr = [];
    while (num > 0) {
        arr.push(num % 2);
        num = Math.floor(num / 2);
    }
    return arr.reverse();
}