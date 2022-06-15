/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head1 = list1,
        head2 = list2;
    
    let dummy = new ListNode();
    let curr = dummy;
    
    while (head1 && head2) {
        if (head1.val < head2.val) {
            curr.next = new ListNode(head1.val);
            head1 = head1.next;
        } else {
            curr.next = new ListNode(head2.val);
            head2 = head2.next;
        }
        curr = curr.next;
    }
    
    if (head1) {
        curr.next = head1;
    } else if (head2) {
        curr.next = head2;
    }
    
    return dummy.next;
    
};

// 1 -> 2 -> 4 -> n
// 1 -> 3 -> 4 -> n
/*

 

*/