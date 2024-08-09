// linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as
//  an argument. The function should return an array containing all values of the nodes
//   in the linked list.

// Hey. This is our first linked list problem, so you should be liberal with watching
//  the Approach and Walkthrough. Be productive! -AZ

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

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
// const x = new Node("x");
// const y = new Node("y");

// x.next = y;

// // x -> y

// linkedListValues(x); // -> [ 'x', 'y' ]
// const q = new Node("q");

// // q

// linkedListValues(q); // -> [ 'q' ]
// linkedListValues(null); // -> [ ]