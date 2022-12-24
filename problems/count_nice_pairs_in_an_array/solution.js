/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    // nums[i] - rev(nums[i]) = nums[j] - rev[nums[j]]
    //         a                        b
    let map = new Map();
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = n - rev(n);
        if (map.has(diff)) {
            pairs = pairs + map.get(diff);
        }
        map.set(diff, map.get(diff) + 1 || 1);
    }
    return pairs % (Math.pow(10, 9) + 7);
};

function rev(num) {
    const arr = [];
    while (num > 0) {
        arr.push(getLastDigit(num));
        num = removeLastDigit(num);
    }
    
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] * Math.pow(10, arr.length - i - 1);
    }
    return result;
}

function getLastDigit(num) {
    return num % 10;
}

function removeLastDigit(num) {
    return Math.trunc(num / 10);
}

