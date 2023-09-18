/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
    let res = [];
    const freq = new Array(51).fill(0);

    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] < 0) freq[Math.abs(nums[i])]++;
        if (i - j + 1 >= k) {
            let count = 0;
            for (let l = 50; l >= 1; l--) {
                count += freq[l];
                if (count >= x) {
                    res.push(-l);
                    break;
                }
            }
            if (count < x) res.push(0);
            if (nums[j] < 0) freq[Math.abs(nums[j])]--;
            j++
        }
    }
    return res;
};