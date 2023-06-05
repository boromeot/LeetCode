/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const cache = {};

    for (let i = 0; i < nums.length; i++) {
        if (cache[nums[i]] !== undefined) continue;
        cache[nums[i]] = convert(nums[i]);
    }

    return nums.sort((a, b) => cache[a] - cache[b]);

    function convert(num) {
        if (num === 0) return mapping[0];
        let sum = 0;
        let len = 0;
        while (num > 0) {
            sum += mapping[getLast(num)] * Math.pow(10, len);
            len++;
            num = removeLast(num);
        }
        return sum;
    }   
};

function getLast(num) {
    return num % 10;
}

function removeLast(num) {
    return Math.floor(num / 10);
}