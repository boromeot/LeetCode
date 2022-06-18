/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let heap = new MaxHeap(stones);
    
    while (heap.size() > 1) {
        let stone1 = heap.poll();
        let stone2 = heap.poll();
        
        let newStone = stone1 - stone2;
        
        if (newStone > 0) {
            heap.insert(newStone);
        }    
    }
    return heap.peek() || 0;
};

class MaxHeap {
    constructor(data = []) {
        this.data = data;
        this.heapify();
    }
    
    heapify() {
        if (this.size() <= 1) return;
        for (let i = this.size() - 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }
    
    bubbleDown(i) {
        const n = this.size();
        let min = i;
        
        while (i < n) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            
            if (l < n && this.data[l] > this.data[i] ||
                r < n && this.data[r] > this.data[i]) {
                if (r < n) {
                    min = this.data[l] > this.data[r] ? l : r;
                } else {
                    min = l;
                }
            }
            if (i === min) break;
            this.swap(i, min);
            i = min;
        }
    }
    
    bubbleUp(i) {
        while (i > 0) {
            let pIndex = Math.floor((i - 1) / 2);
            if (this.data[i] > this.data[pIndex]) {
                this.swap(i, pIndex);
                i = pIndex;
            } else {
                break;
            }
        }
    }
    
    insert(val) {
        this.data.push(val);
        this.bubbleUp(this.size() - 1);
    }
    
    poll() {
        if (this.size() <= 0) return null;
        let min = this.data[0];
        let last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    peek() {
        return this.data[0];
    }
    
    size() {
        return this.data.length;
    }
    
}