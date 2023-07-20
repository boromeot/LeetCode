/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            const large = nextLargest(i);
            swap(i, large);
            reverse(i + 1);
            return;
        }
    }
    nums.reverse();

    function nextLargest(index) {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] > nums[index]) return i;
        }
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function reverse(i) {
        let start = i;
        let end = nums.length - 1;

        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }

    }

};