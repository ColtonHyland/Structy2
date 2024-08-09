class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
    if (root === null) return [];
    const queue = [root];
    const vals = [];
    while (queue.length > 0) {
        const current = queue.shift();
        vals.push(current.val);
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return vals;
};

module.exports = {
    breadthFirstValues,
};

// n = number of nodes
// Time: O(n^2)
// Space: O(n)
