/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j];
            for (let k = j + 1; k < nums.length; k++) {
                let num3 = nums[k];
                if (num1 !== num2 && num1 !== num3 && num2 !== num3) count++;
            }
        }
    }
    return count;
};