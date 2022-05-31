/**
 * @param {number[]} stones
 * @return {number}
 */

/*
[2,7,4,1,8,1]
   8
 7   4
1 2 3
*/
var lastStoneWeight = function(stones) {
    const heap = new maxHeap(stones);
    while (heap.size() > 1) {
        const max1 = heap.poll();
        const max2 = heap.poll();
        if (max1 > max2) heap.insert(max1 - max2);
    }
    return heap.size() === 1 ? heap.peek() : 0;
    
};

class maxHeap {
    constructor(data = []) {
        this.data = data;
        this.heapify();
    }
    
    heapify() {
        if (this.size() <= 1) return;
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }
    
    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }
    
    poll() {
        if (this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }
    
    insert(val) {
        this.data.push(val);
        let lastIndex = this.size() - 1;
        this.bubbleUp(lastIndex);
    }
    
    bubbleUp(i) {
        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if (this.data[i] > this.data[parentIndex] ) {
                this.swap(parentIndex, i);
                i = parentIndex;
            } else {
                break;
            }
        }
    }
    
    bubbleDown(i) {
        let max = i;
        const n = this.size();
        
        while (i < n) {
            let l = i * 2 + 1;
            let r = l + 1;
            
            if (l < n && this.data[l] > this.data[i] ||
                r < n && this.data[r] > this.data[i]) {
                if (r < n) {
                    max = this.data[l] > this.data[r]  ? l : r;
                } else {
                    max = l;
                }
            }
            
            if (max === i) break;
            this.swap(i, max);
            i = max;
        }
        
    }
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    size() {
        return this.data.length;
    }
    
}