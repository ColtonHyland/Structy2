class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ITERATIVE

const createLinkedList = (values) => {
    if (values.length === 0) return null;
    const dummyHead = new Node(null);
    let tail = dummyHead;
    for (let value of values) {
        tail.next = new Node(value);
        tail = tail.next;
    }
    return dummyHead.next;
};

// n is lnegth of values
// Time: O(n)
// Space: O(n)

// RECURSIVE

// const createLinkedList = (values, count = 0) => {
//     if (values.length === count) return null;
//     const newNode = new Node(values[count]);
//     newNode.next = createLinkedList(values, count + 1);
//     return newNode;
// };

// n is lnegth of values
// Time: O(n)
// Space: O(n)

module.exports = {
    createLinkedList,
};
