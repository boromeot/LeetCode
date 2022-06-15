/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let temp = null;
    
    while (head) {
        const newHead = head.next;
        head.next = temp;
        temp = head;
        head = newHead;
    }
    return temp;
};