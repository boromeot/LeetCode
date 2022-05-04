/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        let mergedList = [];
        
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2;
            if (lists[i + 1]) {l2 = lists[i + 1]} else {l2 = null};
            mergedList.push(merge(l1, l2));
        }
        lists = mergedList;
    }
    return lists[0];
};

function merge(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    if (l1) {
        curr.next = l1;
    } else if (l2) {
        curr.next = l2;
    }
    
    return dummy.next;
    
}