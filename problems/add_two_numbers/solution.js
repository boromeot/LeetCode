/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    
    let carry = 0;
    let v1;
    let v2;
    while (l1 || l2 || carry) {
        if (l1) {v1 = l1.val} else {v1 = 0};
        if (l2) {v2 = l2.val} else {v2 = 0};
        
        
        let sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        curr.next = new ListNode(sum);
        
        curr = curr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;
};

