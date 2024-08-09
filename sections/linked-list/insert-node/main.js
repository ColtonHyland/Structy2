// insert node
// Write a function, insertNode, that takes in the head of a linked list,
// a value, and an index. The function should insert a new node with the
// value into the list at the specified index. Consider the head of the
// linked list as index 0. The function should return the head of the
// resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

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


// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// insertNode(a, 'x', 2);
// // a -> b -> x -> c -> d
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// insertNode(a, 'v', 3);
// // a -> b -> c -> v -> d
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// insertNode(a, 'm', 4);
// // a -> b -> c -> d -> m
// const a = new Node("a");
// const b = new Node("b");

// a.next = b;

// // a -> b

// insertNode(a, 'z', 0);
// // z -> a -> b 