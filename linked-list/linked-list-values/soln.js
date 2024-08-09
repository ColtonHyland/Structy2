class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

const linkedListValues = (head) => {
    const values = [];

    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }
    return values;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

// RECURSIVE

// const linkedListValues = (head) => {
//     let values = [];
//     let current = head;
//     fillValues(head, values);
//     return values;
// };

// const fillValues = (head, values) => {
//     if (head === null) return;
//     values.push(head.val);
//     fillValues(head.next, values);
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
    linkedListValues,
};
