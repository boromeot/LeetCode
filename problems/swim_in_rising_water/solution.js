/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const ROWS = grid.length,
          COLS = grid[0].length;
    const heap = new MinHeap();
    const visited = new Set();
    heap.insert([grid[0][0], 0, 0]); // [weight, r, c]
    let t = 0; // Update after popping from minHeap
    
    dijkstras();
    return t;
    
    function dijkstras() {
        const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        while (heap.size() > 0) {
            const [weight, r, c] = heap.poll();
            if (visited.has(r + ',' + c)) continue;
            visited.add(r + ',' + c);
            
            t = Math.max(t, weight);
            if (r === ROWS - 1 && c === COLS - 1) break;
            for (let [dr, dc] of DIRECTIONS) {
                const [adjR, adjC] = [r + dr, c + dc];
                if (adjR < 0 || adjR >= ROWS ||
                    adjC < 0 || adjC >= COLS ||
                    visited.has(adjR + ',' + adjC)) continue;
                const adjWeight = grid[adjR][adjC];
                heap.insert([adjWeight, adjR, adjC]);
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