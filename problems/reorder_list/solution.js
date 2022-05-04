/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head,
        fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let second = slow.next;
    let prev = null;
    slow.next = null;
    while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    let first = head;
    second = prev;
    while (second) {
        let tmp1 = first.next;
        let tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
    
}; // [1, 2, 3, 4] 5, n
//     s  f 
//        s     f
//           s        f