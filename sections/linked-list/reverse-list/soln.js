class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

const reverseList = (head) => {
    let current = head;
    let prev = null;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

// n = number of nodes
// Time: O(n)
// Space: O(1)

//RECURSIVE

// const reverseList = (head, prev = null) => {
//     if (head === null) return prev;
//     const next = head.next;
//     head.next = prev;
//     return reverseList(next, head);
// };

// n = number of nodes in the linked list
// Time: O(n)
// Space: O(n)

module.exports = {
    reverseList,
};
