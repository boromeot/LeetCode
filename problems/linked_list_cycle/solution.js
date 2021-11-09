/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head) {
        let visited = new Set();
        while (head.next) {
            if (visited.has(head)) {
                return true;
            }
            visited.add(head);
            head = head.next;
    }
        return false;
    }
    return false;
};