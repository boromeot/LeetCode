/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let res = [];
        
    for (let i = 1; i <= 9; i++) {
        bt([i], 0);
    }
    return res;
    
    function bt(path, i) {
        if (path.length === n) {
            let sum = 0;
            for (let i = 0; i < path.length; i++) {
                sum += path[i] * Math.pow(10, path.length - (1 + i));
            }
            res.push(sum);
            return;
        }
     
        if (k === 0) {
            bt([...path, path[i] + k], i + 1);
        } else {
            if ((path[i] + k) < 10) {
                bt([...path, path[i] + k], i + 1);
            }
            if ((path[i] - k) >= 0) {
                bt([...path, path[i] - k], i + 1);
            }
        }
    }
};