class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE

const treeSum = (root) => {
    if (root === null) return 0;
    let sum = 0;
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        sum += current.val;
        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }
    return sum;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

// RECURSIVE

// const treeSum = (root) => {
//     if (root === null) return 0;
//     return root.val + treeSum(root.left) + treeSum(root.right);
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
    treeSum,
};
