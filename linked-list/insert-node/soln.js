class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

const insertNode = (head, value, index) => {
    const newNode = new Node(value);
    let current = head;
    let count = 0;
    if (index === count) {
        newNode.next = head;
        return newNode;
    }
    while (current !== null) {
        if (index - 1 === count) {
            const temp = current.next;
            current.next = newNode;
            newNode.next = temp;
            break;
        }
        current = current.next;
        count++;
    }
    return head;
};

// n = number of nodes
// Time: O(n)
// Space: O(1)

// RECURSIVE

// const insertNode = (head, value, index) => {

//     if (head === null) return null;
//     if (index === 0) {
//         const newNode = new Node(value);
//         newNode.next = head;
//         return newNode;
//     }
//     if (index - 1 === 0) {
//         const temp = head.next;
//         head.next = new Node(value);
//         head.next.next = temp;
//         return head;
//     }
//     head.next = insertNode(head.next, value, index - 1);
//     return head;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
    insertNode,
};
