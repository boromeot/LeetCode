/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const target = 0;
    const res = [];
    if (nums.length < 3) return res;
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) break;
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < target) {
                l++;
            } else if (sum > target) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                while(nums[l] === nums[l + 1]) l++;
                while(nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
        }
    }
    return res;
};

//[-1,0,1,-1,-2,2,-1,-4]
//[-4,-2,-1,-1,-1,0,1,2,2]