/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = {};
    for (let c of tasks) {
        if (map[c]) {
            map[c]++;
        } else {
            map[c] = 1;
        }
    }
    
    const heapNodes = [];
    for (let [task, count] of Object.entries(map)) {
        heapNodes.push(new HeapNode(count, task, 0));
    }
    
    const q = [];
    const heap = new MaxHeap(heapNodes);
    let t = 0;
    while (heap.size() > 0 || q.length > 0) {
        t++;
        if (heap.size() > 0) {
            let task = heap.poll();
            task.priority--;
            task.time = t + n;
            if (task.priority > 0) {
                q.push(task)
            }
        }
        
        if (q.length > 0 && q[0].time === t) {
            const task = q.shift();
            heap.insert(task);
        }
        
    }
    return t;
};

class HeapNode {
    constructor(priority, val, time = 0) {
        this.priority = priority;
        this.val = val;
        this.time = time;
    }
}

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
    
    poll() {
        if (this.size() <= 0) return null;
        let max = this.data[0];
        let last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return max;
    }
    
    bubbleDown(i) {
        const n = this.size();
        let maxdex = i;
        
        while (i < n) {
            let l = 2 * i + 1,
                r = 2 * i + 2;
            
            if (l < n && this.data[l].priority > this.data[i].priority ||
                r < n && this.data[r].priority > this.data[i].priority) {
                if (r < n) {
                    maxdex = this.data[l].priority > this.data[r].priority ? l : r;
                } else {
                    maxdex = l;
                }
            }
            if (i === maxdex) break;
            this.swap(i, maxdex);
            i = maxdex;
        }
    }
    
    insert(heapNode) {
        this.data.push(heapNode);
        this.bubbleUp(this.size() - 1);
    }
    
    bubbleUp(i) {
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            
            if (this.data[i].priority > this.data[p].priority) {
                this.swap(i, p);
                i = p;
            } else {
                break;
            }
        }
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