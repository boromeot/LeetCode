class Solution {
    public void moveZeroes(int[] nums) {
        int slowPointer = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[slowPointer++] = nums[i];
            }
        }
        for (int i = slowPointer; i < nums.length; i++) {
            nums[i] = 0;
        }
    }
}
//[0,1,0,3,12]
//[1,1,0,3,12]
//[1,3,0,3,12]
//[1,3,12,3,12]


//[1,3,12,0,0]