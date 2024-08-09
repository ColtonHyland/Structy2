class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERTIVE

const linkedListFind = (head, target) => {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
};

// n = number of nodes
// TIme: O(n)
// Space: O(1)

// RECURSIVE

// const linkedListFind = (head, target) => {
//     if (head === null) return false;
//     if (head.val === target) return true;
//     return linkedListFind(head.next, target);
// };

// n = number of nodes
// TIme: O(n)
// Space: O(n)

module.exports = {
    linkedListFind,
};
