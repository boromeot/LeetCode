/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const N = nums.length;

    let result = [];
    let sum = 0;
    for (let n of nums) {
        sum += Math.abs(nums[0] - n);
    }
    result.push(sum);

    for (let i = 1; i < N; i++) {
        const delta = nums[i] - nums[i - 1];

        sum += delta * i;
        sum -= delta * (N - i);
        result.push(sum);
    }
    return result;
};