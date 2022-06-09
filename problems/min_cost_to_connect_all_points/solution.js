/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) { //Prims
    const heap = new MinHeap();
    const visited = new Set();
    heap.insert([0, 0]); // [Weight, nodeIndex] of points
    let weight = 0;
    
    prims();
    return weight;
    
    function prims() {
        while (visited.size < points.length) {
            const [distance, nodeIndex] = heap.poll();
            if (visited.has(nodeIndex)) continue;
            
            visited.add(nodeIndex);
            weight += distance;
            const [x1, y1] = points[nodeIndex];
            
            for (let adjNodeIndex = 0; adjNodeIndex < points.length; adjNodeIndex++) {
                if (visited.has(adjNodeIndex)) continue;
                const [x2, y2] = points[adjNodeIndex];
                const adjDistance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                heap.insert([adjDistance, adjNodeIndex]);
            }
        }
    }
    
};

class MinHeap {
    constructor() {
        this.data = [];
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
    
    bubbleDown(i) {
        const n = this.size();
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