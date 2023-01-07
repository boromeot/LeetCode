/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    return convert(head, null);


    function convert(head, tail) {
        let slow = head,
            fast = head;
        if (head === tail) return null;

        while (fast !== tail && fast.next !== tail) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let newHead = slow;
        slow.left = convert(head, slow);
        slow.right = convert(slow.next, tail);
        return newHead;
    }
};