/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
   let count = new Array(n + 1).fill(0);
   for (let [a, b] of trust) {
       count[a]--;
       count[b]++;
   }

   for (let i = 1; i <= n; i++) {
       if (count[i] === n - 1) return i;
   }
   return -1;
};