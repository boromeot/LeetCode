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
    const arr1 = getArray(l1);
    const arr2 = getArray(l2);
    let carry = 0;
    const sum = [];
    while (arr1.length || arr2.length || carry) {
        const num1 = arr1.pop() || 0;
        const num2 = arr2.pop() || 0;
        const total = num1 + num2 + carry;
        carry = 0;
        if (total < 10) {
            sum.push(total);
        } else {
            sum.push(total - 10);
            carry = 1;
        }
    }
    let dummy = new ListNode();
    let curr = dummy;
    for (let i = sum.length - 1; i >= 0; i--) {
        curr.next = new ListNode(sum[i]);
        curr = curr.next;
    }
    return dummy.next;
};

function getArray(l) {
    let arr = [];
    while (l) {
        arr.push(l.val);
        l = l.next;
    }
    return arr;
}