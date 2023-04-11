/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {
    const N = nums.length;
    const memo = new Array(limit * 2 + 2).fill(0);
    for (let i = 0; i < N / 2; i++) {
        let l = nums[i],
            r = nums[N - i - 1];

        memo[Math.min(l, r) + 1]--;
        memo[l + r]--;
        memo[l + r + 1]++;
        memo[Math.max(l, r) + limit + 1]++;
    }
    let res = N;
    let curr = N;
    for (let i = 2; i <= limit*2; i++) {
        curr += memo[i];
        res = Math.min(res, curr);
    }
    console.log(memo)
    return res;
};

//[0, 0, -1, -2, 0, -1, 1, 0, -1,  2, 1,  0, 1, 0]
// 0  1   2   3  4   5  6  7   8   9 10  11  12 13