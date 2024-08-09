class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE

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

// RECURSIVE

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
