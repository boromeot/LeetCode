
var HitCounter = function() {
    this.timeToHits = {};
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.timeToHits[timestamp] ? this.timeToHits[timestamp]++ : this.timeToHits[timestamp] = 1;
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    const startTime = timestamp - 300 < 0 ? 0 : timestamp - 300;
    const endTime = timestamp;
    let countOfHits = 0;
    for (let k of Object.keys(this.timeToHits)) {
        if (k > startTime && k <= endTime) {
            countOfHits += this.timeToHits[k];
        }
    }   
    return countOfHits;
}

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */