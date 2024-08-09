class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE STACK

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

// ITERATIVE QUEUE

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

// RECURSIVE

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
