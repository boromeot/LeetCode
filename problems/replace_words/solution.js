/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

class Trie {
    constructor() {
        this.isWord = false;
        this.children = {};
    }
}

function insert(word, root) {
    let node = root;
    for (const c of word) {
        const children = node.children;
        if (!children[c]) children[c] = new Trie();
        node = children[c];
    }
    node.isWord = true;
}

function find(word, root) {
    let node = root;
    let newWord = '';
    for (const c of word) {
        const children = node.children;
        if (!children[c]) return word;
        newWord += c;
        node = children[c];
        if (node.isWord) return newWord;
    }
    return word;
}

var replaceWords = function(dictionary, sentence) {
    const trie = new Trie();
    for (const word of dictionary) {
        insert(word, trie);
    }

    const words = sentence.split(' ');
    const res = [];
    for (const word of words) {
        const newWord = find(word, trie);
        res.push(newWord);
    }
    return res.join(' ');
};