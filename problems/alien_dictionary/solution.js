/**
 * @param {string[]} words
 * @return {string}
 */

//[hello, hell]
var alienOrder = function(words) {
    const map = {};
    for (let word of words) {
        for (let c of word) {
            map[c] = new Set();
        }
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        let w1 = words[i],
            w2 = words[i + 1];
        
        let minLen = Math.min(w1.length, w2.length);
        
        if (w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) {
            return '';
        }
        
        for (let i = 0; i < minLen; i++) {
            if (w1[i] !== w2[i]) {
                map[w1[i]].add(w2[i]);
                break;
            }
        }
    }
    const path = new Set();
    const visited = new Set();
    const res = [];
    
    for (let c of Object.keys(map)) {
        if (!dfs(c)) return '';
    }
    return res.reverse().join('');

    function dfs(node) { // returns false if cycle detected, true otherwise
        if (path.has(node)) return false;
        if (visited.has(node)) return true;
        
        path.add(node);
        
        for (let child of map[node]) {
            if (!dfs(child)) return false;
        }
        path.delete(node);
        visited.add(node);
        res.push(node);
        return true;
    }
    
};