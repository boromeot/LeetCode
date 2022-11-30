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
    if (!head) return false;
    
    let l = head,
        r = head.next;
    
    const set = new Set();
    
    while (!set.has(l) || !set.has(r)) {
        if (r === null || r.next === null) return false;
        set.add(l);
        set.add(r);
        
        l = l.next.next;
        r = r.next.next;
    }
    return true;
};

// 1 2 3 4 n
//     s f
//         

//