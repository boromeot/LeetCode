/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

function furthestBuilding(heights, bricks, ladders) {
    let minHeap = new MinHeap();
    let res = 0;
    
    for (let i = 0; i < heights.length - 1; i++) {
        let currHeight = heights[i],
            nextHeight = heights[i + 1],
            diff = nextHeight - currHeight;
        res = i;
        if (diff > 0) { //If diff > 0 you need some bricks or a ladder
            if (ladders > 0) {
                ladders--;
                minHeap.insert(diff);
            } else {
                if (minHeap.peek() && minHeap.peek() < diff) { // The current gap is larger than a previous gap
                    if (bricks >= minHeap.peek()) { // There is enough bricks to replace an old ladder
                        bricks -= minHeap.poll();
                        minHeap.insert(diff);
                    } else {
                        return i;
                    }
                } else { // The current gap is equall to or smaller than the smallest previous ladder gap
                    if (bricks >= diff) {
                        bricks -= diff;
                    } else {
                        return i;
                    }
                }
            }
        }
    }
    return heights.length - 1;
}

class MinHeap { // Array representation of a MinHeap
    constructor() {
        this.data = []; 
    }
    
    heapify() {
        if (this.size() <= 1) return;
        for (let i = this.size() - 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }
    
    size() {
        return this.data.length;
    }
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
        
    poll() {
        if (this.size() <= 0) return null;
        
        const min = this.data[0];
        const last = this.data.pop();
        
        if (this.size() > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }
    
    peek() {
        if (this.size() <= 0) return null;
        return this.data[0];
    }
    
    bubbleDown(i) {
        const n = this.size();
        let mindex = i;
        
        while (i < n) {
            let l = 2 * i + 1,
                r = 2 * i + 2;
            
            if (l < n && this.data[l] < this.data[i] || 
                r < n && this.data[r] < this.data[i]) {
                if (r < n) {
                    mindex = this.data[l]  < this.data[r] ? l : r;
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
            if (this.data[i] < this.data[pIndex]) {
                this.swap(i, pIndex);
                i = pIndex;
            } else {
                break;
            }
        }
    }    
}