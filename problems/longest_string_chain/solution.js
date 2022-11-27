/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const mem = {}; // Stores previously calculated chains
    words.sort((a, b) => a.length - b.length);
    for (const word of words) {
        let longest = 0;
        for (let i = 0; i < word.length; i++) {
            const pred = word.slice(0, i) + word.slice(i+1);
            longest = Math.max(longest, (mem[pred] || 0) + 1);
        }
        mem[word] = longest;
    }
    return Math.max(...Object.values(mem));
};