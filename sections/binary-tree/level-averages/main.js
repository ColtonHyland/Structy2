// level averages
// Write a function, levelAverages, that takes in the root of a binary tree that
// contains number values. The function should return an array containing the
// average value of each level.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
    const levels = [];
    levelAveragesHelper(root, levels, 0);
    const averages = [];
    for (let level of levels) {
        averages.push(getAvg(level));
    }
    return averages;
};

const levelAveragesHelper = (root, levels, levelNum) => {
    if (root === null) return;
    if (levels.length === levelNum) {
        levels.push([root.val]);
    } else {
        levels[levelNum].push(root.val);
    }
    levelAveragesHelper(root.left, levels, levelNum + 1);
    levelAveragesHelper(root.right, levels, levelNum + 1);
};

const getAvg = (level) => {
    let sum = 0;
    for (let num of level) {
        sum = sum + num;
    }
    return sum / level.length;
};

// n = number of nodes in the binary tree
// h = height of the binary tree
// Time: O(n)
// Space: O(h)

module.exports = {
  levelAverages,
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

// levelAverages(a); // -> [ 3, 7.5, 1 ] 
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(54);
// const d = new Node(20);
// const e = new Node(15);
// const f = new Node(1);
// const g = new Node(3);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// e.left = f;
// e.right = g;

// //        5
// //     /    \
// //    11    54
// //  /   \
// // 20   15
// //      / \
// //     1  3

// levelAverages(a); // -> [ 5, 32.5, 17.5, 2 ] 
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(0);
// const f = new Node(45);
// const g = new Node(-1);
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
// // -3   0     45
// //     /       \
// //    -1       -2

// levelAverages(a); // -> [ -1, -5.5, 14, -1.5 ]
// const q = new Node(13);
// const r = new Node(4);
// const s = new Node(2);
// const t = new Node(9);
// const u = new Node(2);
// const v = new Node(42);

// q.left = r;
// q.right = s;
// r.right = t;
// t.left = u;
// u.right = v;

// //        13
// //      /   \
// //     4     2
// //      \
// //       9
// //      /
// //     2
// //    /
// //   42

// levelAverages(q); // -> [ 13, 3, 9, 2, 42 ]
// levelAverages(null); // -> [ ]