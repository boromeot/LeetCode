/**
 * @param {number} capacity
 */

class Node {
    constructor(key, val) {
        [this.key, this.val] = [key, val];
        [this.prev, this.next] = [null, null];
    }
}

class LRUCache {
    constructor(capacity = 1) {
        this.cache = new Map(); // { key: node }
        this.cap = capacity;
        this.size = 0;
        
        [this.left, this.right] = [new Node(0, 0), new Node(0, 0)];
        [this.left.next, this.right.prev] = [this.right, this.left];
    }
    //Remove node from list
    remove(node) {
        let prev = node.prev,
            next = node.next;
        
        [prev.next, next.prev] = [next, prev];
    }
    
    //Insert at right
    insert(node) {
        let endNode = this.right.prev;
                
        [endNode.next, this.right.prev] = [node, node];
        
        [node.prev, node.next] = [endNode, this.right];      
    }
    
    get(key) {
        if (this.cache.get(key) !== undefined) {
            this.remove(this.cache.get(key));
            this.insert(this.cache.get(key));
            return this.cache.get(key).val;
        } else {
            return -1;
        }
    }
    
    put(key, val) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));   
            this.size--;
        }
        this.cache.set(key, new Node(key, val));
        this.insert(this.cache.get(key));
        this.size++;
        
        if (this.size > this.cap) {
            let lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
            this.size--;
        }
    }
    
}