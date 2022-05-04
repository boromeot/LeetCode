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
    let oldToNew = new Map();
    
    oldToNew.set(null, null);

    let curr = head;
    while (curr) {
        let copy = new ListNode(curr.val);
        oldToNew.set(curr, copy);
        curr = curr.next;
    }
    
    curr = head;
    while (curr) {
        copy = oldToNew.get(curr);
        copy.next = oldToNew.get(curr.next);
        copy.random = oldToNew.get(curr.random);
        curr = curr.next;
    }
    return oldToNew.get(head);
    
};