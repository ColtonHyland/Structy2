class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

const removeNode = (head, targetVal) => {
    if (head.val === targetVal) return head.next;
    let current = head;
    let prev = null;
    while (current !== null) {
        if (current.val === targetVal) {
            prev.next = current.next;
            break;
        }
        prev = current;
        current = current.next;
    }
    return head;
};

// n = list length
// Time: O(n)
// Space: O(1)

// RECURSIVE

// const removeNode = (head, targetVal) => {
//     if (head === null) return null;
//     if (head.val === targetVal) return head.next;
//     head.next = removeNode(head.next, targetVal);
//     return head;
// };

// n = list length
// Time: O(n)
// Space: O(n)

module.exports = {
    removeNode,
};
