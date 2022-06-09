/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adj = {};
    
    for (let i = 0; i < n + 1; i++) {
        adj[i] = [];
    }
    
    for (let [u, v, w] of times) {
        adj[u].push([w, v]);
    }
    
    const heap = new MinHeap();
    const visited = new Set();
    
    heap.insert([0, k]); // [Weight, nodeIndex];
    let t = 0;
    
    dijkstras();
    
    return visited.size === n ? t : -1;
    
    function dijkstras() {
        while (heap.size() > 0) {
            const [weight, nodeIndex] = heap.poll();
            if (visited.has(nodeIndex)) continue;
            
            visited.add(nodeIndex);
            t = Math.max(t, weight);
            for (let [adjWeight, adjNode] of adj[nodeIndex]) {
                if (visited.has(adjNode)) continue;
                heap.insert([weight + adjWeight, adjNode]);
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