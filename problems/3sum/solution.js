/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const target = 0;
    const res = [];
    nums.sort((a, b) => a - b);
    
    // [-4,-1,-1,-1,0,1,2]
    //      i  l        r
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        
        let l = i + 1,
            r = nums.length - 1;
        
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < target) {
                l++;
            } else if (sum > target) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l + 1] && l < r) {
                    l++;
                }
                while (nums[r] === nums[r - 1] && r > l) {
                    r--;
                }
                l++;
                r--;
            }
        }
        while (nums[i] === nums[i + 1] && i < nums.length) {
            i++;
        }
        
    }
    return res;
    // [0]
    //  i  l  r
    

    
    // a + b + c = 0
    // b + c = -a
    
};