// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return
//  an array containing all values of the tree in depth-first order.

// Hey. This is our first binary tree problem, so be extra sure to check out the approach video! -AZ

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// depthFirstValues(a);
// //    -> ['a', 'b', 'd', 'e', 'c', 'f']
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /
// //   g

// depthFirstValues(a);
// //    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
// const a = new Node('a');
// //      a
// depthFirstValues(a);
// //    -> ['a']
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //       \
// //        d
// //         \
// //          e

// depthFirstValues(a);
// //    -> ['a', 'b', 'c', 'd', 'e']
// depthFirstValues(null);
// //    -> []
