/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    const depths = new MaxHeap();

    for (const child of root.children) {
        depths.insert(maxDepth(child));
    }

    if (root.children.length === 0) {
        return 1;
    }

    return depths.poll() + 1;
};

class MaxHeap {
    constructor() {
        this.data = [];
    }

    poll() {
        if (this.size() === 0) return null;
        const max = this.data[0];
        if (this.size() > 0) {
            let last = this.data.pop();
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
