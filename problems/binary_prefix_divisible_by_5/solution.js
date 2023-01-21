/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let answer = new Array(nums.length);
    let sum = 0;
    for (let i in nums) {
        sum *= 2;
        sum += nums[i];
        sum = sum % 5;
        answer[i] = (sum % 5 === 0);
    }
    console.log(nums.length)
    return answer;
};