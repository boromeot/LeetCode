/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    wordList.push(beginWord);
    let adj = {};
    
    for (let word of wordList) {
        adj[word] = [];
    }
    
    for (let i = 0; i < wordList.length; i++) {
        let word1 = wordList[i];
        
        for (let j = i + 1; j < wordList.length; j++) {
            let word2 = wordList[j];
            let diff = 0;
            
            for (let k = 0; k < word1.length; k++) {
                if (word1[k] !== word2[k]) diff++;
                if (diff > 1) break;
            }
            
            if (diff <= 1) {
                adj[word1].push(word2);
                adj[word2].push(word1);
            }
        }
    }
    
    const q = [beginWord];
    const visited = new Set();
    
    let sequenceLen = 1;
    
    if (bfs()) {
        return sequenceLen;
    } else {
        return 0;
    }
    
    function bfs() {
        while (q.length) {
            const qLen = q.length;
            for (let i = 0; i < qLen; i++) {
                const word = q.shift();
                if (word === endWord) return true; // Found path to endWord
                visited.add(word);
                for (let adjWord of adj[word]) {
                    if (!visited.has(adjWord)) {
                        q.push(adjWord);
                    }
                }
            }
            sequenceLen++;
        }
        return false; // Did not find path to endWord
    }
};