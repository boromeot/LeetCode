/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

class obj {
    constructor(val, count) {
        this.val = val;
        this.count = count;
    }
}

var removeDuplicates = function(s, k) {
    let stack = [];
    
    for (let c of s) {
        let topObj = stack.at(-1);
        if (topObj && c === topObj.val) {
            stack.push(new obj(c, topObj.count + 1));
        } else {
            stack.push(new obj(c, 1));
        }
        
        if (stack.at(-1).count === k) {
            for (let i = 0; i < k; i++) {
                stack.pop();
            }
        }
    }
    let res = '';
    for (let o of stack) {
        res += o.val;
    }
    return res;
};