class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] results = new int[nums.length];
        int start = 0;
        int end = nums.length - 1;
        
        for (int i = nums.length - 1; i >= 0; i--) {
            if (nums[end] * nums[end] >= nums[start] * nums[start]) {
                results[i] = nums[end] * nums[end];
                end--;      
            } else {
                results[i] = nums[start] * nums[start];
                start++;
            }
        }
        return results;
    }
}