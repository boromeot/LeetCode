/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {    
    //Prim's algo
    const n = points.length;
    const heap = new MinHeap() // [cost, node]
    const visited = new Set();
    let weight = 0;
    
    heap.insert([0, 0])

    while (visited.size < n) {
        const [distance, nodeIndex] = heap.poll();
        if (visited.has(nodeIndex)) continue;
        weight += distance;
        visited.add(nodeIndex);
        const currPoint = points[nodeIndex];
        
        for (let i = 0; i < n; i++) {
            if (i === 0 || visited.has(i)) continue;
            const point = points[i];
            const distance = Math.abs(point[0] - currPoint[0]) + Math.abs(point[1] - currPoint[1]);
            heap.insert([distance, i]);
        }
    }

    return weight;
    
};


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
        let n = this.size();
        let mindex = i;
        
        while (i < n) {
            let l = 2 * i + 1,
                r = 2 * i + 2;
            
            if (l < n && this.data[l][0] < this.data[i][0] ||
                r < n && this.data[r][0] < this.data[i][0]) {
                if (r < n) {
                    mindex = this.data[l][0] < this.data[r][0] ? l : r;
                } else {
                    mindex = l;
                }
            }
            if (mindex === i) break;
            this.swap(mindex, i);
            i = mindex;
        }
        
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
    
    poll() {
        if (this.size() <= 0) return null
        const res = this.data[0];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return res;
    }
    
    peek(i = 0) {
        return this.data[i];
    }
    
    insert(val) {
        this.data.push(val);
        this.bubbleUp(this.size() - 1);
    }
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    size() {
        return this.data.length;
    }
    
}