/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
   let beautySum = 0;
   for (let i = 0; i < s.length; i++) {
       const count = new Array(26).fill(0);
       let max = -Infinity;
       for (let j = i; j < s.length; j++) {
           let c = s[j];
           count[c.charCodeAt(0) - 97]++;
           max = Math.max(max, count[c.charCodeAt(0) - 97]);
           let min = findMin(count);
           beautySum += max - min;
       }
   }
   return beautySum;
};

function findMin(arr) {
    let min = Infinity;
    for (let n of arr) {
        if (n !== 0 && n < min) min = n;
    }
    return min;
}