var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const idx = Math.floor((left + right) / 2);
        if (nums[idx] == target) return idx;
        if (nums[idx] < target) left = idx + 1;
        if (nums[idx] > target) right = idx - 1;
    }
    return -1;
};