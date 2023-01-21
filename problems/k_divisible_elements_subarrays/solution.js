/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    let set = new Set();

    for (let i = 1; i <= nums.length; i++) {
        let l = 0,
            r = 0;
        let kCount = 0;
        let subArr = [];
        while (r < i) {
            if (nums[r] % p === 0) kCount++;
            subArr.push(nums[r]);
            r++;
        }

        while (r <= nums.length) {
            // console.log(subArr)
            if (kCount <= k) set.add(subArr.join('-'));
            
            if (nums[r] % p === 0) kCount++;
            subArr.push(nums[r]);
            r++;

            if (nums[l] % p === 0) kCount--;
            subArr.shift();
            l++;
        }
    }
    // console.log(set)
    return set.size;
}; // [1,9,8,7,19]