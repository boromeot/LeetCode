/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adj = {};

    for (let i = 1; i <= n; i++) {
        adj[i] = [];
    }
    
    for (let [u, v, w] of times) {
        adj[u].push([w, v]);
    }

    const heap = new MinHeap();
    const visited = new Set();

    heap.insert([0, k]); // [weight, node]
    let t = 0;

    djikstras();

    if (visited.size === n) return t;
    else return -1;

    function djikstras() {
        while (heap.size() > 0) {
            let [weight, nodeIndex] = heap.poll();
            if (visited.has(nodeIndex)) continue;
            visited.add(nodeIndex);

            t = Math.max(t, weight);
            for (let [adjWeight, adjIndex] of adj[nodeIndex]) {
                if (visited.has(adjIndex)) continue;
                heap.insert([t + adjWeight, adjIndex]);
            }
        }
    }
};



class MinHeap {
    constructor() { // Array representation of heap
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
                    mindex = l
                }
            }
            if (i === mindex) break;
            this.swap(i, mindex);
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
            if (this.data[pIndex][0] > this.data[i][0]) {
                this.swap(pIndex, i);
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