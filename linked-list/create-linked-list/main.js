// create linked list
// Write a function, createLinkedList, that takes in an array of values as an argument.
// The function should create a linked list containing each element of the array as the
// values of the nodes. The function should return the head of the linked list.

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

// createLinkedList(["h", "e", "y"]);
// // h -> e -> y
// createLinkedList([1, 7, 1, 8]);
// // 1 -> 7 -> 1 -> 8
// createLinkedList(["a"]);
// // a
// createLinkedList([]);
// // null