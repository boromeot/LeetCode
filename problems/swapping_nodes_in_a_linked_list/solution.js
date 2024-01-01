/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let slow = head,
        med = head,
        fast = head;
    let count = 0;
    while (fast) {
        if (count >= k) med = med.next;
        if (count === k - 1) slow = fast;
        count++;
        fast = fast.next;
    }

    const temp = slow.val;
    slow.val = med.val;
    med.val = temp;
    
    return head;
};