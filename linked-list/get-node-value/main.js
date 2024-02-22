// get node value
// Write a function, getNodeValue, that takes in the head of a linked list and an index.
// The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

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

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 2); // 'c'
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 3); // 'd'
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 7); // null
// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// getNodeValue(node1, 0); // 'banana'
// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// getNodeValue(node1, 1); // 'mango'