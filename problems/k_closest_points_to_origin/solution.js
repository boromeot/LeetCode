/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // Create min heap
    const heapItems = [];
    for (let [x, y] of points) {
        let distance = distanceFromOrigin(x, y);
    
        heapItems.push(new HeapItem(distance, [x, y]));
    }
    const heap = new MinHeap(heapItems);
    // Poll heap k times and return the kth poll
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(heap.poll().point);
    }
    return res;
};

function distanceFromOrigin(x, y) { // Distance from origin
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

class HeapItem {
    constructor(priority, point) {
        this.priority = priority;
        this.point = point;
    }
}

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
    
    bubbleDown(i) {
        const n = this.size();
        let mindex = i;
        
        while (i < n) {
            let l = 2 * i + 1,
                r = 2 * i + 2;
            
            if (l < n && this.data[l].priority < this.data[i].priority ||
                r < n && this.data[r].priority < this.data[i].priority) {
                if (r < n) {
                    mindex = this.data[l].priority < this.data[r].priority ? l : r;
                } else {
                    mindex = l;
                }
            }
            if (i === mindex) break;
            this.swap(i, mindex);
            i = mindex;
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
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    size() {
        return this.data.length;
    }
    
}