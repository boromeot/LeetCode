/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.data = new Array(n + 1);
    this.ptr = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let chunk = [];
    this.data[idKey] = value;
    while (this.ptr <= this.data.length && this.data[this.ptr] !== undefined) {
        chunk.push(this.data[this.ptr]);
        this.ptr++;
    }
    return chunk;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */