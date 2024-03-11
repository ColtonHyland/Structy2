// tree min value
// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
    const stack = [root];
    let minValue = Infinity;
    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val < minValue) minValue = current.val;
        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }
    return minValue;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

// const treeMinValue = (root) => {
//     if (root === null) return Infinity;
//     const minLeft = treeMinValue(root.left);
//     const minRight = treeMinValue(root.right);
//     return Math.min(root.val, minLeft, minRight);
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
  treeMinValue,
};


// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// treeMinValue(a); // -> -2
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(14);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       5
// //    /    \
// //   11     3
// //  / \      \
// // 4   14     12

// treeMinValue(a); // -> 3
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   -4   -13
// //     /       \
// //    -2       -2

// treeMinValue(a); // -> -13
// const a = new Node(42);

// //        42

// treeMinValue(a); // -> 42