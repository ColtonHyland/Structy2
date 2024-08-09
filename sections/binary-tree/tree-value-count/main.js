// tree value count
// Write a function, treeValueCount, that takes in the root of a binary tree
// and a target value. The function should return the number of times that
// the target occurs in the tree.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
    if (root === null) return 0;
    const stack = [root];
    let count = 0;
    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val === target) count++;
        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }
    return count;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

// const treeValueCount = (root, target) => {
//     if (root === null) return 0;
//     const match = root.val === target ? 1 : 0;
//     return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
  treeValueCount,
};


// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   6     6
// //  / \     \
// // 4   6     12

// treeValueCount(a,  6); // -> 3
// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   6     6
// //  / \     \
// // 4  6     12

// treeValueCount(a,  12); // -> 2
// const a = new Node(7);
// const b = new Node(5);
// const c = new Node(1);
// const d = new Node(1);
// const e = new Node(8);
// const f = new Node(7);
// const g = new Node(1);
// const h = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      7
// //    /   \
// //   5     1
// //  / \     \
// // 1   8     7
// //    /       \
// //   1         1
// treeValueCount(a, 1); // -> 4
// const a = new Node(7);
// const b = new Node(5);
// const c = new Node(1);
// const d = new Node(1);
// const e = new Node(8);
// const f = new Node(7);
// const g = new Node(1);
// const h = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      7
// //    /   \
// //   5     1
// //  / \     \
// // 1   8     7
// //    /       \
// //   1         1

// treeValueCount(a, 9); // -> 0
// treeValueCount(null, 42); // -> 0