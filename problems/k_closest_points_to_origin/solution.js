/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heapItems = [];
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const priority = distance(point[0], point[1]);
        heapItems.push(new HeapItem(point, priority));
    }

    const heap = new MinHeap(heapItems);
    const res = [];
    
    for (i = 0; i < k; i++) {
        res.push(heap.poll().item);
    }
    
    return res;
    
    function distance(x1, y1, x2 = 0, y2 = 0) {
        return Math.pow(x1, 2) + Math.pow(y1, 2);
    }
}

class HeapItem {
    constructor(item, priority = item) {
        this.item = item;
        this.priority = priority;
    }
}

class MinHeap {
    constructor(data = []) {
        this.data = data;
        this.heapify();
    }
    
    heapify() {
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }
    
    peek(i) {
        if (this.size === 0) return null;
        return this.data[i];
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
        const lastIndex = this.size() - 1;
        this.bubbleUp(lastIndex);
    }
    
    bubbleUp(i) {
        while (i > 0) {
            let parentIndex = Math.floor((i - 1) / 2);
            if (this.data[i].priority < this.data[parentIndex].priority) {
                this.swap(i, parentIndex);
                i = parentIndex
            } else {
                break;
            }
        }
    }
    
    bubbleDown(i) {
        let minIndex = i;
        const n = this.size();
        
        while (i < n) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            
            if (l < n && this.data[l].priority < this.data[i].priority || 
                r < n && this.data[r].priority < this.data[i].priority) {
                if (r < n) {
                    minIndex = this.data[l].priority < this.data[r].priority ? l : r;
                } else {
                    minIndex = l;
                }
            }
            
            if (minIndex === i) break;
            this.swap(minIndex, i);
            i = minIndex;
        }
    }
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    size() {
        return this.data.length;
    }
    
}