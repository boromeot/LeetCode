/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {} // { anagramKey: [anagram1, anagram2] }

    for (let str of strs) {
        const buckets = new Array(26).fill(0); // [0, 0, 0, 0...]
        for (let c of str) {
            let cIndex = c.charCodeAt(0) - 97; // a.charCodeAt(0) - 97 :=>: 97 - 97
            buckets[cIndex]++;
        }
        const anagramKey = buckets.join(',');
        map[anagramKey] ? map[anagramKey].push(str) : map[anagramKey] = [str];
    }
    return Object.values(map); // [[str1, str2], [str3], [str4, str5, str6]]
};

// Anagrams have distinct keys, 