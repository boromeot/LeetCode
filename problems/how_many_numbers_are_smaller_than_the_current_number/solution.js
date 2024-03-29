/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const answer = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                answer[i]++;
            }
        }
    }
    return answer;
};