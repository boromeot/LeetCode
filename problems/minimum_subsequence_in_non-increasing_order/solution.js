/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let heap = new MaxHeap();
    let oldSum = 0;
    
    for (let n of nums) {
        heap.insert(n);
        oldSum += n;
    }

    let newSum = 0;
    const res = [];
    while (newSum <= oldSum) {
        const n = heap.poll();
        newSum += n;
        oldSum -= n;
        res.push(n);
    }
    return res;
};

class MaxHeap {
    constructor() {
        this.data = [];
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
        
            if (l < n && this.data[l] > this.data[i] ||
                r < n && this.data[r] > this.data[i]) {
                if (r < n) {
                    maxdex = this.data[l] > this.data[r] ? l : r;
                } else {
                    maxdex = l;
                }
            }
            if (i === maxdex) break;
            this.swap(i, maxdex);
            i = maxdex;
        }
    }

    insert(val) {
        this.data.push(val);
        this.bubbleUp(this.size() - 1);
    }

    bubbleUp(i) {
        while (i > 0) {
            let pIndex = Math.floor((i - 1) / 2);
            if (this.data[i] > this.data[pIndex]) {
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