/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const oldToNew = new Map();
    
    return dfs(head);
    
    function dfs(head) {
        if (!head) return null;
        if (oldToNew.get(head)) {
            return oldToNew.get(head);
        }
        
        const copy = new Node(head.val);
        oldToNew.set(head, copy);
        
        copy.next = dfs(head.next);
        copy.random = dfs(head.random);
        return copy;
    }
};