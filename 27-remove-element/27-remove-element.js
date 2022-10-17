/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let deletions = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            delete nums[i]
            deletions++;
        };
    }
    nums.sort();
    return nums.length - deletions;

//     let l = 0,
//         r = nums.length - 1;
    
//     while(l < r) {
//         if (nums[l] !== undefined) l++;
//         if (nums[r] === undefined) r++;
        
        
        
//     }

};