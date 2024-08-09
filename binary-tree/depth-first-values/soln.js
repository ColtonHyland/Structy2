class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE

const depthFirstValues = (root) => {
    const stack = [root];
    const vals = [];
    if (root === null) return vals;
    while (stack.length > 0) {
        const current = stack.pop();
        vals.push(current.val);
        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }
    return vals;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

// RECURSIVE

// const depthFirstValues = (root) => {
//     if (root === null) return [];
//     const leftVals = depthFirstValues(root.left);
//     const rightVals = depthFirstValues(root.right);
//     return [root.val, ...leftVals, ...rightVals];
// };

// n = number of nodes
// Time: O(n^2)
// Space: O(n)

module.exports = {
    depthFirstValues,
};
