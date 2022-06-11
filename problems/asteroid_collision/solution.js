

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    //stack
    // check for current head of stack and next value 
    // if they are positive they can be pushed just fine 
    // if they are negative, they can hit another value of the stack if its abs value is greater (loop internally)
    // make sure if both elements are the same, both crash
    const stack = [];
    for(let asteroid of asteroids) {
        if(asteroid > 0) {
            stack.push(asteroid); 
        } else {
            while(stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -asteroid) {
                stack.pop();
            }
            if(stack.length == 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            }
            else if(stack[stack.length - 1] == -asteroid) {
                stack.pop();
            }
        }
    }
    return stack;
};

