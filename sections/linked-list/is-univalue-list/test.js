// is univalue list
// Write a function, isUnivalueList, that takes in the head of a linked list as an argument.
//  The function should return a boolean indicating whether or not the linked list contains
//   exactly one unique value.

// You may assume that the input list is non-empty.

// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(7);

// a.next = b;
// b.next = c;

// // 7 -> 7 -> 7

// isUnivalueList(a); // true
// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(4);

// a.next = b;
// b.next = c;

// // 7 -> 7 -> 4

// isUnivalueList(a); // false
// const u = new Node(2);
// const v = new Node(2);
// const w = new Node(2);
// const x = new Node(2);
// const y = new Node(2);

// u.next = v;
// v.next = w;
// w.next = x;
// x.next = y;

// // 2 -> 2 -> 2 -> 2 -> 2

// isUnivalueList(u); // true
// const u = new Node(2);
// const v = new Node(2);
// const w = new Node(3);
// const x = new Node(3);
// const y = new Node(2);

// u.next = v;
// v.next = w;
// w.next = x;
// x.next = y;

// // 2 -> 2 -> 3 -> 3 -> 2

// isUnivalueList(u); // false
// const z = new Node('z');

// // z

// isUnivalueList(z); // true
// const u = new Node(2);
// const v = new Node(1);
// const w = new Node(2);
// const x = new Node(2);
// const y = new Node(2);

// u.next = v;
// v.next = w;
// w.next = x;
// x.next = y;

// // 2 -> 1 -> 2 -> 2 -> 2

// isUnivalueList(u); // false
