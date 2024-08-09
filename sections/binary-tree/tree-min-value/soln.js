class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE

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

// RECURSIVE

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
