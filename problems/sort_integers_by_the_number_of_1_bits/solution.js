/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a, b) => {
        if (bin(a) === bin(b)) {
            return a - b;
        }
        return bin(a) - bin(b);
    })
    return arr;

    function bin(num) {
        // return count of 1s in binary representation of num
        let count = 0;

        while (num > 0) {
            if (num % 2 === 1) count++;
            num = Math.floor(num / 2);
        }
        return count;
    }
};

// 6 = 110
// 5 = 101
// 4 = 100
// 3 =  11
// 2 =  10
// 1 =   1