/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const heap = new MaxPriorityQueue({priority: x => x[2]});
    
    for(let [pass, total] of classes) {
        const before = pass/total;
        const after = (pass+1)/(total+1)
        heap.enqueue([pass, total, after-before]);
    }
    
    while(extraStudents--) {
        let [pass, total] = heap.dequeue().element;
        pass++;
        total++;
        const before = pass/total;
        const after = (pass+1)/(total+1);
        heap.enqueue([pass, total, after-before]);
    }
    
    let sum = 0;
    
    while(!heap.isEmpty()) {
        const [pass, total] = heap.dequeue().element;
        sum += (pass/total);
    }
    return sum/classes.length;
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
            
            if (l < n && this.data[l][1] < this.data[i][1] ||
                r < n && this.data[r][1] < this.data[i][1]) {
                if (r < n) {
                    mindex = this.data[l][1] < this.data[r][1] ? l : r;
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
            if (this.data[i][1] < this.data[pIndex][1]) {
                this.swap(i, pIndex);
                i = pIndex;
            } else if (this.data[i][1] === this.data[pIndex][1] && this.data[i][0] < this.data[pIndex][0]){
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