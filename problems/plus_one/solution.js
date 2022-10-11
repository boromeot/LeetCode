/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const res = [];
    const endex = digits.length - 1;
    
    if (digits[endex] !== 9) {
        digits[endex]++;
        return digits;
    } 
    res.unshift(0);
    let carry = 1;
    
    for (let i = endex - 1; i >= 0; i--) {
        const n = digits[i];
        const sum = n + carry;
        
        if (sum >= 10) {
            res.unshift(0);
        } else {
            res.unshift(sum);
            carry = 0;
        }        
    }
    
    if (carry > 0) {
        res.unshift(1);
    }
    return res;
    
    
};

/* 


[1,0,0]
  [9,9]
// */