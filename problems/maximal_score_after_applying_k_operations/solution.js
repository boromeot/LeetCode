/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const heap = new MaxPriorityQueue();
    for (let i = 0; i < nums.length; i++) {
        heap.enqueue(nums[i]);
    }
    let score = 0;
    for (let i = 0; i < k; i++) {
        const head = heap.dequeue().priority;
        score += head;
        heap.enqueue(Math.ceil(head / 3));
    }
    return score;
};