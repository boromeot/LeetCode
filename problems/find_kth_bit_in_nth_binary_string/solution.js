/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    let arr = [0];
    for (let i = 1; i < n; i++) {
        const newArr = [...arr, 1, ...reverse(invert(arr))];
        arr = newArr;
    }
    return String(arr[k - 1]);
};

function reverse(arr) {
    return arr.reverse();
}

function invert(arr) {
    const newArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        const newBit = arr[i] === 1 ? 0 : 1;
        newArr[i] = newBit;
    }
    return newArr;
}