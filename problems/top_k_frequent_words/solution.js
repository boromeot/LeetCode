/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const res = new Array();
    const buckets = new Array(words.length + 1);;
    const count = {};
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = new Array();
    }
    
    for (let word of words) {
        count[word] ? count[word]++ : count[word] = 1;    
    }
    
    for (let word of Object.keys(count)) {
        let freq = count[word];
        buckets[freq].push(word);
    }
    
    for (let i = buckets.length - 1; i >= 0; i--) {
        const bucket = buckets[i];
        bucket.sort((a, b) => {
            if (a < b) return 1;
            if (b < a) return -1;
            return 0;
        });
        while (bucket.length) {
            res.push(bucket.pop());
            if (res.length === k) return res;
        }
    }
    
};