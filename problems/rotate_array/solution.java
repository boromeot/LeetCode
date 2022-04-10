class Solution {
    public void rotate(int[] nums, int k) {
        int steps = (k >= nums.length) ? (k % nums.length) : (k);
        int[] newArr = nums.clone();
        System.out.print(steps);
        for (int i = 0; i < nums.length; i++) {
            int newIndex = (i + steps) % nums.length;
            nums[newIndex] = newArr[i];
        }
    } 
}
// [1, 2 ,3, 4, 5, 6, 7]
// steps = 3
//
