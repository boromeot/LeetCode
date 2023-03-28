var PredictTheWinner = function(nums) {
    const N = nums.length;

    function score(left, right) {
        if (left > right) {
            return 0;
        }
        let score_left = nums[left] - score(left + 1, right);
        let score_right = nums[right] - score(left, right - 1);
        return Math.max(score_left, score_right);
    }
    return score(0, N - 1) >= 0;
};