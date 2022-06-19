/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new MinHeap(nums);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.insert(val);
    while (this.heap.size() > this.k) {
        this.heap.poll();
    }
    return this.heap.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap {
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
    
    peek() {
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
            if (this.data[i] < this.data[pIndex]) {
                this.swap(i, pIndex);
                i = pIndex;
            } else {
                break;
            }
            
        }
    }
    
    size() {
        return this.data.length;
    }
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    
}