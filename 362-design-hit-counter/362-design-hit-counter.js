
var HitCounter = function() {
    this.hits = new Array();
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.hits.push(timestamp);
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let l = 0, r = this.hits.length - 1;
    const target = timestamp - 300;
    
    while (l <= r) {
        let m = Math.trunc((l + r) / 2);
        if (this.hits[m] <= target) l = m + 1;
        else r = m - 1;
    }
    return this.hits.length - l;
}

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */