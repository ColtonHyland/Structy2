class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE

const treeIncludes = (root, target) => {
    if (root === null) return false;
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val === target) return true;
        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }
    return false;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

// RECURSIVE

// const treeIncludes = (root, target) => {
//     if (root === null) return false;
//     if (root.val === target) return true;
//     return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
    treeIncludes,
};
