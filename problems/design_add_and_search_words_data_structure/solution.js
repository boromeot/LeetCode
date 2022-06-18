const TrieNode = function() {
    this.children = new Map();
    this.endOfWord = false;
}


var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;

    for (let c of word) {
        if (!curr.children.has(c)) {
            curr.children.set(c, new TrieNode());
        }
        curr = curr.children.get(c);
    }
    curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const q = [this.root];
    
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        const qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            if (c === '.') {
                q.push(...node.children.values());
            } else if (node.children.has(c)) {
                q.push(node.children.get(c));
            }
        }
    }
    for (let node of q) {
        if (node.endOfWord) return true;
    }
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */