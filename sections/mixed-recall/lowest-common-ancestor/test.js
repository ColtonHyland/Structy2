// lowest common ancestor
// Write a function, lowestCommonAncestor, that takes in the root of a binary
// tree and two values. The function should return the value of the lowest common
// ancestor of the two values in the tree.

// You may assume that the tree values are unique and the tree is non-empty.

// Note that a node may be considered an ancestor of itself.

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;

// //      a
// //    /    \
// //   b      c
// //  / \      \
// // d   e      f
// //    / \
// //    g  h
// lowestCommonAncestor(a, 'd', 'h'); // b
// lowestCommonAncestor(a, 'd', 'g'); // b
// lowestCommonAncestor(a, 'g', 'c'); // a
// lowestCommonAncestor(a, 'b', 'g'); // b
// lowestCommonAncestor(a, 'f', 'c'); // c
// const l = new Node('l');
// const m = new Node('m');
// const n = new Node('n');
// const o = new Node('o');
// const p = new Node('p');
// const q = new Node('q');
// const r = new Node('r');
// const s = new Node('s');
// const t = new Node('t');

// l.left = m;
// l.right = n;
// n.left = o;
// n.right = p;
// o.left = q;
// o.right = r;
// p.left = s;
// p.right = t;

// //        l
// //     /     \
// //    m       n
// //         /    \
// //         o     p
// //        / \   / \
// //       q   r s   t
// lowestCommonAncestor(l, 'r', 'p'); // n
// lowestCommonAncestor(l, 'm', 'o'); // l
// lowestCommonAncestor(l, 't', 'q'); // n
// lowestCommonAncestor(l, 's', 'p'); // p