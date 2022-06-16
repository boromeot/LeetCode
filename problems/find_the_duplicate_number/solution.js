/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) { // O(n^2), O(1)
    
    let slow = 0,
        fast = 0;
    
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        
        if (slow === fast) break;
    }
    
    let slow2 = 0;
    
    while (true) {
        slow = nums[slow];
        slow2= nums[slow2];
        if (slow === slow2) return slow;
    }
    
};

// constant space almost always means pointers!! ! ! ! yay
/*

[1,2,3,4,2]
 l       r

*/