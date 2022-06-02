/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
   A
  A A
 
 */
var leastInterval = function(tasks, n) {
    const map = {};
    for (let i = 0; i < tasks.length; i++) {
        if (!map[tasks[i]]) {
            map[tasks[i]] = 1;
        } else {
            map[tasks[i]]++;
        }
    }
    const heap = new MaxHeap(Object.values(map));
    const q = [];
    let time = 0;
    
    //q [[freq, timeToBeReleased]]
    while (heap.size() > 0 || q.length > 0) {
        time++;
        if (heap.size() > 0) {
            const task = heap.poll() - 1;
            if (task) {
                q.push([task, time + n]);        
            }
        }
        
        if (q.length > 0 && q[0][1] === time) {
            const task = q.shift();
            heap.insert(task[0]);
        }
    }
    return time;
    
};

class HeapItem {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority
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
        if (this.size() <= 0) {
            return null;
        }
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
        this.bubbleUp(this.size() - 1);
    }
    
    bubbleDown(i) {
        let max = i;
        const n = this.size();
        
        while (i < n) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            
            if (l < n && this.data[l] > this.data[i] ||
                r < n && this.data[r] > this.data[i]) {
                if (r < n) {
                    max = this.data[l] > this.data[r] ? l : r;
                } else {
                    max = l;                    
                }
            }
            
            if (max === i) break;
            this.swap(max, i);
            i = max;
        }
    }
    
    bubbleUp(i) {
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.data[i] > this.data[p]) {
                this.swap(i, p);
                i = p;
            } else {
                break;
            }
        }
    }
    
    peek() {
        return this.data[0];
    }
    
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    
    size() {
        return this.data.length;
    }
}