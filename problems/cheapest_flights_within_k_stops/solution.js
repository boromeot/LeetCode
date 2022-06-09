/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;
    
    for (let i = 0; i < k + 1; i++) {
        const tempPrices = prices.slice();
        for (let [u, v, price] of flights) {
            if (prices[u] === Infinity) continue;
            tempPrices[v] = Math.min(prices[u] + price, tempPrices[v]);
        }
        prices = tempPrices;
    }
    
    if (prices[dst] === Infinity) {
        return -1;
    } else {
        return prices[dst];
    }
}

class MinHeap {
    constructor() {
        this.data = [];
    }
    
    poll() {
        if (this.size() <= 0) return null;
        const min = this.data[0];
        const last = this.data.pop();
        if (this.size > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }
    
    bubbleDown(i) {
        const n = this.size();
        const mindex = i;
        
        while (i < n) {
            let l = 2 * i + 1,
                r = 2 * i + 2;
            
            if (l < n && this.data[l][0] < this.data[i][0] ||
                r < n && this.data[r][0] < this.data[i][0]) {
                if (r < n) {
                    mindex = this.data[l] < this.data[r] ? l : r;
                } else {
                    mindex = l;
                }
            }
            if (mindex === i) break;
            this.swap(mindex, i);
            i = mindex;
        }
    }
    
    insert(val) {
        this.data.push(val);
        this.bubbleUp(this.size() - 1);
    }
    
    bubbleUp(i) {
        while (i > 0) {
            let pIndex = Math.floor((i - 1) / 2);
            if (this.data[i][0] < this.data[pIndex][0]) {
                this.swap(i, pIndex);
                i = pIndex;
            } else {
                break;
            }
        }
    }
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    size() {
        return this.data.length;
    }
    
}