/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let cache = {
        '0' : 0,
        '1' : 1
    };
        
    return bt(n);
    
    function bt(n) {
        if (cache[n] !== undefined) return cache[n];
        
        cache[n] = bt(n - 1) + bt(n - 2); 
        
        return cache[n];
    }
};