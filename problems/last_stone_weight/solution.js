/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    const heap = new MaxHeap(stones);
    // console.log(heap)

    while (heap.size() > 1) {
        let s1 = heap.poll(),
            s2 = heap.poll();
        
        heap.insert(Math.abs(s1 - s2));
    }
    
    if (heap.size() === 1) return heap.poll();
    return 0;
    
};

class   MaxHeap {
    constructor(data = []) {
        this.data = data;
        this.heapify();
    }
    
    heapify() {
        if (this.size <= 1) return;
        for (let i = this.size() - 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
        
    }
    
    poll() {
        if (this.size() <= 0) return null;
        const res = this.data[0];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return res;
    }
    
    bubbleDown(i) {
        const n = this.size();
        let mindex = i;
        
        while (i < n) {
            let l = 2 * i + 1,
                r = 2 * i + 2;
            
            if (l < n && this.data[l] > this.data[i] || 
                r < n && this.data[r] > this.data[i]) {
                if (r < n) {
                    mindex = this.data[l] > this.data[r] ? l : r;
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
        while(i > 0) {
            let pIndex = Math.floor((i - 1) / 2);
            
            if (this.data[i] > this.data[pIndex]) {
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