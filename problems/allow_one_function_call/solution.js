/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let remainingCalls = 1;
    return function(...args){
        if (remainingCalls > 0) {
            remainingCalls--;
            return fn(...args);
        }
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */