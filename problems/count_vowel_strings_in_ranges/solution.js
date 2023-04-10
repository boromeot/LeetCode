/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    const prefix = [0];
    
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (set.has(word[0]) && set.has(word.at(-1))) {
            sum++;
        }
        prefix.push(sum);
    }

    const res = [];

    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];
        res.push(prefix[end + 1] - prefix[start]);
    }
    return res;

};