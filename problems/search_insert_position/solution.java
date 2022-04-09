class Solution {
    public int searchInsert(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }
}

// input = [1,3,5,6] target = 7
// start = 0
// end = 4 - 1 => 3
// while (0 <= 3) {
//  mid = 0 + (3 - 0) / 2 => 3 / 2 => 1
//}
//  3 < 7
//  start = 1 + 1 => 2
//
// mid = 2 + (3 - 2) / 2 => 2 + 0 => 2
//
//