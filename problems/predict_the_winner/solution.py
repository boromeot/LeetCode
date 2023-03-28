class Solution:
    def PredictTheWinner(self, nums: List[int]) -> bool:
        N = len(nums)

        def score(left, right):
            if left > right:
                return 0
            
            score_left = nums[left] - score(left + 1, right)
            score_right = nums[right] - score(left, right - 1)

            return max(score_left, score_right)

        return score(0, N - 1) >= 0
