var MyQueue = function() {
    this.stack = [];
    this.inverted = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.inverted.length) return this.inverted.pop();

    while(this.stack.length) {
        this.inverted.push(this.stack.pop());
    }
    if (this.inverted.length) return this.inverted.pop();
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.inverted.length) return this.inverted[this.inverted.length - 1];
    if (this.stack.length) return this.stack[0];
    return null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.stack.length === 0 && this.inverted.length === 0) return true;
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */