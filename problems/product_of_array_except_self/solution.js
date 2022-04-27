/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = [];
    const right = [];
    
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        left.push(product);
        product *= nums[i];
    }
    
    product = 1;
    for (let j = nums.length -1 ; j >= 0; j--) {
        right.push(product);
        product *= nums[j];
    }
    
    const answer = [];
    let m = -1;
    for (let k = 0; k < nums.length; k++) {
        answer.push(left[k] * right.at(m));
        m--;
    }
    return answer;

};
//[ 1,  2, 3, 4]

//[ 1,  1, 2, 6]
//  0   1  2  3


//[1, 4, 12, 24]
//-4 -3  -2  -1

// 0 + 1 = 1
// 1 + 2 = 3
// 2 + 3 = 5