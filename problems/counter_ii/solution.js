/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const start = init;
    let object = {
        increment: () => {
            return ++init;
        },
        decrement: () => {
            return --init;
        },
        reset: () => {
            init = start;
            return init;
        }
    }
    return object;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */