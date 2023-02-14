/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */

var peopleAwareOfSecret = function(n, delay, forget) {
    const mod = Math.pow(10, 9) + 7;
    let arr = new Array(forget).fill(0);
    arr[0] = 1; // [1, 0, 0, 0] 
    for (let day = 0; day < n; day++) {
        let newPeople = 0;
        for (let i = delay - 1; i < arr.length - 1; i++) {
            newPeople += arr[i] % mod;
        }
        // console.log(arr, day + 1);
        if (day === n - 1) return arr.reduce((a, b) => a + b) % mod;
        forward(arr, newPeople);
    }
};

function forward(arr, t) {
    for (let j = 0; j < arr.length; j++) {
            let h = arr[j];
            arr[j] = t;
            t = h
    }
    return arr;
}