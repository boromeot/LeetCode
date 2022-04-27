/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let min = 1;
    let max = 1;
    let answer = Math.max(...nums);
    console.log(answer);
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (nums[i] === 0) {
            min = 1;
            max = 1;
        } else {
            let tmp = max * n;
            max = Math.max(n * max, n * min, n);
            min = Math.min(n * min, tmp, n);
            answer = Math.max(answer, max);
        }
    }
    return answer;
};
// [2, 3, -2, 4]