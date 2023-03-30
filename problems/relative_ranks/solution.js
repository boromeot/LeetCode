/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const heap = new MaxHeap(score);
    const map = {};
    for (let i = 0; i < score.length; i++) {
        map[score[i]] = i; 
    }

    for (let i = 0; i < score.length; i++) {
        if (i === 0) {
            score[map[heap.poll()]] = 'Gold Medal';
        } else if (i === 1) {
            score[map[heap.poll()]] = 'Silver Medal';
        } else if (i === 2) {
            score[map[heap.poll()]] = 'Bronze Medal';
        } else {
            score[map[heap.poll()]] = String(i + 1);
        }
    }
    return score;
};

class MaxHeap {
    constructor(data = []) {
        this.data = data.slice();
        this.heapify();
    }
    
    heapify() {
        if (this.size() <= 1) return;
        const firstParent = Math.floor((this.size() - 2) / 2)
        for (let i = firstParent; i >= 0; i--) {
            this.bubbleDown(i);
        }
        
    }
    /*
        123
         1 
        3 2
        
    */
    bubbleDown(i) {
        let max = i; //The current max 
        const n = this.size(); // The bound of the heap
        
        while (i < n) { // while the current node index is inbound of the heap
            let l = i * 2 + 1;
            let r = i * 2 + 2;
            
            if (l < n && this.data[l] > this.data[i] ||
                r < n && this.data[r] > this.data[i]) {
                if (r < n) {
                    max = this.data[l] > this.data[r] ? l : r;
                } else {
                    max = l;
                }
            }
            
            if (max === i) break;
            this.swap(i, max);
            i = max;
        } 
            
        
    }
    
    bubbleUp(i) {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.data[i] > this.data[p]) {
                this.swap(i, p);
                i = p;
            } else {
                break;
            }
        }
    }
    
    insert(val) {
        this.data.push(val);
        this.bubbleUp(this.size() - 1);
    }
    
    poll() {
        if (this.size() <= 0) return null;
        const res = this.data[0];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return res;
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