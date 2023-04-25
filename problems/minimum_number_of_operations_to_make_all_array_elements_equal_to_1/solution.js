/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let onesCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) onesCount++;
    }
    if (onesCount) return nums.length - onesCount;

    let res = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let g = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            g = gcd(g, nums[j]);
            if (g === 1) {
                res = Math.min(res, j - i + (nums.length - 1));
                break;
            }
        }
    }
    return res === Infinity ? -1 : res;
};

function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}