/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj = {};
    for (let i = 0; i < this.length; i++) {
        const val = this[i];
        const key = fn(val);
        if (!(key in obj)) {
            obj[key] = [];
        }
        obj[key].push(val);
    }
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */