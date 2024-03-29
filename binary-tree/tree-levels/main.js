// tree levels
// Write a function, treeLevels, that takes in the root of a binary tree.
// The function should return a 2-Dimensional array where each subarray 
//represents a level of the tree.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeLevels = (root) => {
    if (root === null) return [];
    const levels = [];
    const stack = [{ node: root, levelNum: 0 }];
    while (stack.length > 0) {
        const { node, levelNum } = stack.pop();
        if (levels.length === levelNum) {
            levels.push([node.val]);
        } else {
            levels[levelNum].push(node.val);
        }
        if (node.right !== null) stack.push({ node: node.right, levelNum: levelNum + 1 });
        if (node.left !== null) stack.push({ node: node.left, levelNum: levelNum + 1 });
    }
    return levels;
};

// const treeLevels = (root) => {
//     if (root === null) return [];
//     const levels = [];
//     const queue = [{ node: root, levelNum: 0 }];
//     while (queue.length > 0) {
//         const { node, levelNum } = queue.shift();
//         if (levels.length === levelNum) {
//             levels.push([node.val]);
//         } else {
//             levels[levelNum].push(node.val);
//         }
//         if (node.left !== null) queue.push({ node: node.left, levelNum: levelNum + 1 });
//         if (node.right !== null) queue.push({ node: node.right, levelNum: levelNum + 1 });
//     }
//     return levels;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

// const treeLevels = (root) => {
//     const levels = [];
//     treeLevelsHelper(root, levels, 0);
//     return levels;
// };

// const treeLevelsHelper = (root, levels, levelNum) => {
//     if (root === null) return;
//     if (levels.length === levelNum) {
//         levels.push([root.val]);
//     } else {
//         levels[levelNum].push(root.val);
//     }
//     treeLevelsHelper(root.left, levels, levelNum + 1);
//     treeLevelsHelper(root.right, levels, levelNum + 1);
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
  treeLevels,
};

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// treeLevels(a); // ->
// // [
// //   ['a'],
// //   ['b', 'c'],
// //   ['d', 'e', 'f']
// // ]
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");
// const i = new Node("i");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;

// //         a
// //      /    \
// //     b      c
// //   /  \      \
// //  d    e      f
// //      / \    /
// //     g  h   i

// treeLevels(a); // ->
// // [
// //   ['a'],
// //   ['b', 'c'],
// //   ['d', 'e', 'f'],
// //   ['g', 'h', 'i']
// // ]
// const q = new Node("q");
// const r = new Node("r");
// const s = new Node("s");
// const t = new Node("t");
// const u = new Node("u");
// const v = new Node("v");

// q.left = r;
// q.right = s;
// r.right = t;
// t.left = u;
// u.right = v;

// //      q
// //    /   \
// //   r     s
// //    \
// //     t
// //    /
// //   u
// //  /
// // v

// treeLevels(q); //->
// // [
// //   ['q'],
// //   ['r', 's'],
// //   ['t'],
// //   ['u'],
// //   ['v']
// // ]
// treeLevels(null); // -> []