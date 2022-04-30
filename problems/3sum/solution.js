/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let answer = [];
    
    if (nums.length < 3) {
        return answer;
    }
    
    const sorted = nums.sort((a, b) => a - b);
    const target = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] > target) break;
        
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        
        let j = i + 1;
        let k = sorted.length - 1;
        while (j < k) {
            let sum = sorted[i] + sorted[j] + sorted[k];
            if (sum === target) {
                answer.push([sorted[i], sorted[j], sorted[k]]);
                while (sorted[j] === sorted[j + 1]) j++;
                while (sorted[k] === sorted[k - 1]) k--;
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            }
        }
    }
    return answer;
};

//[-4,-1,-1,-1,0,1,2]