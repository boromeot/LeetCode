/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    dfs(head);
    return head;
    function dfs(node) {
        if (!node) return null;
                
        if (node.child) {
            const nextNode = node.next;
            const tail = findTail(node.child);
            node.next = node.child;
            node.child.prev = node;
            if (nextNode) nextNode.prev = tail;
            tail.next = nextNode;
            node.child = null;
        }    
        dfs(node.next);
    }
};

function findTail(node) {
    while (node.next) {
        node = node.next;
    }
    return node;
}