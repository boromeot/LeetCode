/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.total = 0;
    this.que = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.que.length >= this.size) {
        this.total -= this.que.shift();
    } 
    this.total += val;
    this.que.push(val);
    return this.total / this.que.length;
    
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */