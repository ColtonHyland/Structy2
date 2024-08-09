class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

// const getNodeValue = (head, index) => {
//     let current = head;
//     while (current !== null) {
//         if (index === 0) return current.val;
//         current = current.next;
//         index--;
//     }

//     return null;
// }

// n = number of nodes
// TIme: O(n)
// Space: O(1)

//RECURSIVE

const getNodeValue = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;
    return getNodeValue(head.next, index - 1);
};

// n = number of nodes
// TIme: O(n)
// Space: O(n)

module.exports = {
    getNodeValue,
};
