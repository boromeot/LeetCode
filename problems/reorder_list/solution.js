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
    //Find the mid point of the list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let temp = slow.next;
    slow.next = null;
    let mid = temp;
    
    // Reverse the second half of the list
    let prev = null;
    while (mid) {
        const newHead = mid.next;
        mid.next = prev;
        prev = mid;
        mid = newHead;
    }

    let head2 = prev;
    let curr = head;
    
    // Merge the two list
    while (head2) {
        let t = curr.next,
            t2 = head2.next;
        
        curr.next = head2;
        head2.next = t;
        curr = t;
        head2 = t2;
    }
    
    return head;
}
/*

1 -> 2 -> 3 -> 4 -> 5 -> 6
s
     f
     s         f
          s              f 
1 -> 6 -> 2 -> 5 -> 3 -> 4
1 -> 2 -> 3
6 -> 5 -> 4

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
s
     f
     s         f
          s              f
               s                  f
1 -> 7 -> 2 -> 6 -> 3 -> 5 -> 4
1 -> 2 -> 3 -> 4
7 -> 6 -> 5

*/