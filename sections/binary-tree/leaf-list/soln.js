class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE

const leafList = (root) => {
    if (root === null) return [];
    const stack = [root];
    const leaves = [];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current.left === null && current.right === null) leaves.push(current.val);
        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }
    return leaves;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

// RECURSIVE

// const leafList = (root) => {
//     const leaves = [];
//     fillLeaves(root, leaves);
//     return leaves;
// };

// const fillLeaves = (root, leaves) => {
//     if (root === null) return;
//     if (root.left === null && root.right === null) return leaves.push(root.val);
//     fillLeaves(root.left, leaves);
//     fillLeaves(root.right, leaves);
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
    leafList,
};
