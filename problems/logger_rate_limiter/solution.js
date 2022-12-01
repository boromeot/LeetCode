
var Logger = function() {
    this.obj = {};
};

/*
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.obj[message] + 10 <= timestamp ||
        this.obj[message] === undefined) {
        this.obj[message] = timestamp;
        return true;
    } 
    return false;
}

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */