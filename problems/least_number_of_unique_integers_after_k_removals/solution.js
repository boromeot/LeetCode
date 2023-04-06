/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const count = {};

    for (let num of arr) {
        count[num] ? count[num]++ : count[num] = 1;
    }

    const buckets = new Array(arr.length + 1);
    let uniqueCount = 0;
    for (let num in count) {
        const numCount = count[num];
        buckets[numCount] ? buckets[numCount].push(num)  : buckets[numCount] = [num];
        uniqueCount++;
    }

    for (let count = 1; count < buckets.length; count++) {
        const bucket = buckets[count] || [];
        for (let j = 0; j < bucket.length; j++) {
            if (count <= k) {
                k -= count;
                uniqueCount--;
            }
        }
        if (k === 0) break;
    }
    return uniqueCount;
};