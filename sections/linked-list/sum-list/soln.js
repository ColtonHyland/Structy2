class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }

    return sum;
};

// n = number of nodes
// TIme: O(n)
// Space: O(1)

// RECURSIVE

// const sumList = (head) => {
//     if (head === null) return 0;
//     return head.val + sumList(head.next);
// };

// n = number of nodes
// TIme: O(n)
// Space: O(n)

module.exports = {
    sumList,
};
